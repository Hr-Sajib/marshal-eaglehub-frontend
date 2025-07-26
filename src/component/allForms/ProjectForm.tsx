"use client";

import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FaImage } from "react-icons/fa";

type FormData = {
  image: FileList | null;
  name: string;
  details: string;
  affiliateLink: string;
};

export default function ProjectForm() {
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

  // const onSubmit = (data: FormData) => {
  //   console.log("Submitted data:", data);
  //   try {
  //     // Simulate API call or form submission
  //     // await api.submit(data);
  //     toast.success("Project submitted successfully!");
  //   } catch (error) {
  //     toast.error("Submission failed. Please try again.");
  //   }
  // };

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call or form submission
      // await api.submit(data);

      // Simulate random success/failure for testing
      if (Math.random() < 0.5) {
        throw new Error("Simulated failure");
      }

      toast.success("Project submitted successfully!");
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
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
    <div className="min-h-screen  px-4 flex items-center justify-center">
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full  space-y-6 text-white"
      >
        {/* Tool Image */}
        <div className="border border-primary p-4 rounded-lg">
          <label className="block mb-3 font-medium  text-base ">
            Tool Image
          </label>
          <div
            onClick={handleImageClick}
            className="bg-zinc-900 h-48 rounded-lg flex items-center justify-center relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-red-600 transition"
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
  );
}
