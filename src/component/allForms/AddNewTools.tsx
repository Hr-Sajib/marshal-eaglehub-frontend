"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaImage } from "react-icons/fa";

type FormData = {
  image: FileList | null;
  name: string;
  details: string;
  affiliateLink: string;
};

export default function AddNewToolsForm() {
  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm<FormData>();

  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    if (fileRef.current) {
      fileRef.current.click(); // open file picker
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", e.target.files); // sync with react-hook-form
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (

    <div className="relative z-10 ">
      <Toaster position="top-right" />
      <h1 className="text-center text-2xl md:text-[35px] text-white">Add New Tool</h1>
      <div className=" px-4 flex items-center justify-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[1150px] space-y-6 text-white bg-black py-8 md:px-12 rounded-lg"
        >
          {/* Tool Image */}
          <div className="border border-primary p-4 rounded-lg">
            <label className="block mb-3 font-medium  text-base ">
              Tool Image
            </label>
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
                {...register("image", { required: "Tool image is required" })}
                ref={(e) => {
                  register("image").ref(e);
                  fileRef.current = e; // capture ref
                }}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
            )}
          </div>

          {/* Tool Name */}
          <div className="border border-primary p-4 rounded-lg">
            <label className="block mb-3 font-medium  text-base ">
              Tool Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Tool name is required" })}
              className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none  focus:ring-2 focus:ring-red-600"
              placeholder="AI Tool Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Tool Details */}
          <div className="border border-primary p-4 rounded-lg">
            <label className="block mb-3 font-medium  text-base ">
              Tool Details
            </label>
            <textarea
              {...register("details", { required: "Tool details are required" })}
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none  focus:ring-2 focus:ring-red-600"
              placeholder="Details about this tool"
            />
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">
                {errors.details.message}
              </p>
            )}
          </div>

          {/* Affiliate Link */}
          <div className="border border-primary p-4 rounded-lg">
            <label className="block mb-3 font-medium  text-base ">
              Affiliate Link
            </label>
            <input
              type="url"
              {...register("affiliateLink", {
                required: "Affiliate link is required",
              })}
              className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none  focus:ring-2 focus:ring-red-600"
              placeholder="https://example.com"
            />
            {errors.affiliateLink && (
              <p className="text-red-500 text-sm mt-1">
                {errors.affiliateLink.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              onClick={() => toast.success("Submitted successfully!")}
              className="bg-primary hover:bg-red-800 text-white text-sm px-10 py-2 rounded-md shadow mt-5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}
