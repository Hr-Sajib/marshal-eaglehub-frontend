"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaImage } from "react-icons/fa";
import { useCreateToolMutation } from "@/redux/api/Tools/toolsApi";
import { useSelector } from "react-redux";
import { currentUser } from "@/redux/api/Auth/auth.slice";
import { useGetUserByIdQuery } from "@/redux/api/Auth/authApi";

type FormData = {
  name: string;
  description: string;
  price: number;
  commissionRate: number;
  image: FileList | null;
};

export default function AddNewToolsForm() {
  const user = useSelector(currentUser);
  const id = user?.id as string;

  const { data: singleUser } = useGetUserByIdQuery(id);
  console.log("singleUser data:", singleUser);

  const [createTool, { isLoading: isSubmitting }] = useCreateToolMutation();
  const {
    register,
    handleSubmit,
    setValue,
    reset, // Add reset from useForm
    formState: { errors },
  } = useForm<FormData>();

  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setValue("image", files, { shouldValidate: true });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setValue("image", null, { shouldValidate: true });
      setPreview(null);
    }
  };

  const uploadImageToImgBB = async (file: File): Promise<string> => {
    if (!process.env.NEXT_PUBLIC_IMGBB_API_KEY) {
      console.error("ImgBB API key is missing");
      throw new Error("ImgBB API key is not configured");
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("key", process.env.NEXT_PUBLIC_IMGBB_API_KEY);

    try {
      const response = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        return data.data.url;
      }
      console.error("ImgBB API error:", data.error);
      throw new Error(data.error?.message || "Image upload failed");
    } catch (error) {
      console.error("Image upload error:", error);
      throw new Error("Failed to upload image to ImgBB");
    }
  };

  const onSubmit = async (data: FormData) => {
    console.log("Form data:", data);
    try {
      if (!singleUser?.data) {
        toast.error("User data not found. Please login again.");
        return;
      }

      if (singleUser.data.role !== "founder") {
        toast.error("Only founders can create tools.");
        return;
      }

      if (!singleUser.data.roleData?._id) {
        toast.error("Founder ID not found. Please ensure your account is properly configured.");
        return;
      }

      let imageUrl = "";
      if (data.image && data.image[0]) {
        imageUrl = await uploadImageToImgBB(data.image[0]);
      }

      const toolData = {
        founderId: singleUser.data.roleData._id,
        name: data.name,
        description: data.description,
        price: Number(data.price),
        commissionRate: Number(data.commissionRate),
        imageUrl,
      };

      console.log("Submitting tool data:", toolData);
      const response = await createTool(toolData).unwrap();
      toast.success(response.message || "Tool created successfully!");

      // Reset form and image preview after successful submission
      reset();
      setPreview(null);
    } catch (error: any) {
      toast.error(error?.message || "Failed to create tool. Please try again.");
      console.error("Create tool error:", error);
    }
  };

  return (
    <div className="relative z-10">
      <Toaster position="top-right" />
      <h1 className="text-center text-2xl md:text-[35px] text-white">Add New Tool</h1>
      <div className="px-4 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[1150px] space-y-6 text-white bg-black py-8 md:px-12 rounded-lg"
        >
          <div className="border border-primary p-4 rounded-lg">
            <label className="block mb-3 font-medium text-base">Tool Image (Optional)</label>
            <div
              onClick={handleImageClick}
              className="bg-black h-48 rounded-lg flex items-center justify-center relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-red-600 transition"
            >
              {preview ? (
                <Image
                  src={preview}
                  width={100}
                  height={100}
                  alt="Tool Preview"
                  className="object-contain h-full w-full"
                />
              ) : (
                <FaImage className="text-gray-500 text-4xl" />
              )}
              <input
                type="file"
                accept="image/*"
                {...register("image")}
                onChange={handleImageChange}
                className="hidden"
                ref={fileRef}
              />
            </div>
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
          </div>

          <div className="border border-primary p-4 rounded-lg">
            <label className="block mb-3 font-medium text-base">Tool Name</label>
            <input
              type="text"
              {...register("name", { required: "Tool name is required" })}
              className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="AI Tool Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="border border-primary p-4 rounded-lg">
            <label className="block mb-3 font-medium text-base">Tool Description</label>
            <textarea
              {...register("description", { required: "Tool description is required" })}
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Details about this tool"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          <div className="border border-primary p-4 rounded-lg">
            <label className="block mb-3 font-medium text-base">Price</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                min: { value: 0, message: "Price cannot be negative" },
              })}
              className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter price"
            />
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
          </div>

          <div className="border border-primary p-4 rounded-lg">
            <label className="block mb-3 font-medium text-base">Commission Rate (%)</label>
            <input
              type="number"
              {...register("commissionRate", {
                required: "Commission rate is required",
                min: { value: 0, message: "Commission rate cannot be negative" },
                max: { value: 100, message: "Commission rate cannot exceed 100%" },
              })}
              className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter commission rate"
            />
            {errors.commissionRate && <p className="text-red-500 text-sm mt-1">{errors.commissionRate.message}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-primary hover:bg-red-800 text-white text-sm px-10 py-2 rounded-md shadow mt-5 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}