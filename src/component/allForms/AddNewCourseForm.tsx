"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";

type FormData = {
  title: string;
  description: string;
  category: string;
  content: string;
  instructorName: string;
  instructorImage: FileList | null;
};

export default function AddNewCourseForm() {
  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm<FormData>();

  const [instructorPreview, setInstructorPreview] = useState<string | null>(
    null
  );
  const instructorImageRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
  };

  const handleInstructorImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("instructorImage", e.target.files);
      const reader = new FileReader();
      reader.onloadend = () => setInstructorPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen  text-white px-4 py-8 flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full  space-y-6">
        {/* Course Title */}
        <div className="border border-primary p-4 rounded-lg">
          <label className="block mb-2 font-medium text-base">
            Course Title
          </label>
          <input
            type="text"
            {...register("title", { required: "Course title is required" })}
            placeholder="Enter course title"
            className={`w-full px-4 py-2 rounded bg-black border ${
              errors.title ? "border-primary ring-red-500" : "border-[#100A12]"
            } focus:outline-none focus:ring-2`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Course Description */}
        <div className="border border-primary p-4 rounded-lg">
          <label className="block mb-2 font-medium text-base">
            Course Description
          </label>
          <textarea
            rows={4}
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Enter course description"
            className={`w-full px-4 py-2 rounded bg-black border ${
              errors.description
                ? "border-primary ring-red-500"
                : "border-[#100A12]"
            } focus:outline-none focus:ring-2`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Course Category */}
        <div className="border border-primary p-4 rounded-lg">
          <label className="block mb-2 font-medium text-base">
            Course Category
          </label>
          <input
            type="text"
            {...register("category", { required: "Category is required" })}
            placeholder="e.g. Design, AI"
            className={`w-full px-4 py-2 rounded bg-black border ${
              errors.category
                ? "border-primary ring-red-500"
                : "border-[#100A12]"
            } focus:outline-none focus:ring-2`}
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Course Content */}
        <div className="border border-primary p-4 rounded-lg">
          <label className="block mb-2 font-medium text-base">
            Course Content
          </label>
          <div className="relative">
            <input
              type="text"
              {...register("content", { required: "Content is required" })}
              placeholder="Enter course content"
              className={`w-full px-4 py-2 pr-10 rounded bg-[#070707] text-sm border ${
                errors.content
                  ? "border-primary ring-red-500"
                  : "border-[#100A12]"
              } focus:outline-none focus:ring-2`}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-sm cursor-pointer">
              <FaPlus />
            </span>
          </div>
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        {/* Instructor Section */}
        <div className="border border-primary p-4 rounded-lg">
          <label className="block mb-2 font-medium text-base">
            Instructor(s)*
          </label>
          <div className="flex items-center gap-4">
            <div
              onClick={() => instructorImageRef.current?.click()}
              className={`w-14 h-14 rounded-full border-2 ${
                errors.instructorImage
                  ? "border-primary ring-red-500"
                  : "border-primary"
              } flex items-center justify-center overflow-hidden bg-zinc-900 cursor-pointer hover:ring-2 hover:ring-red-600 transition`}
            >
              {instructorPreview ? (
                <Image
                  src={instructorPreview}
                  alt="Instructor"
                  width={111}
                  height={111}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-sm">+</span>
              )}
            </div>
            <input
              type="text"
              {...register("instructorName", {
                required: "Instructor name is required",
              })}
              placeholder="Name"
              className={`flex-grow px-4 py-2 rounded bg-black border ${
                errors.instructorName
                  ? "border-primary ring-red-500"
                  : "border-[#100A12]"
              } focus:outline-none focus:ring-2`}
            />
          </div>
          {errors.instructorName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.instructorName.message}
            </p>
          )}

          <input
            type="file"
            accept="image/*"
            {...register("instructorImage", {
              required: "Instructor image is required",
            })}
            className="hidden"
            ref={(e) => {
              register("instructorImage").ref(e);
              instructorImageRef.current = e;
            }}
            onChange={handleInstructorImageChange}
          />
          {errors.instructorImage && (
            <p className="text-red-500 text-sm mt-2">
              {errors.instructorImage.message}
            </p>
          )}
          <button
            type="button"
            onClick={() => instructorImageRef.current?.click()}
            className="mt-4 bg-red-600 px-4 py-1 rounded text-sm"
          >
            Add Image
          </button>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded shadow"
          >
            Launch my course
          </button>
        </div>
      </form>
    </div>
  );
}
