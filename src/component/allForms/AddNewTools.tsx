// "use client";
// import { useGetUserQuery } from "@/redux/api/Auth/authApi";
// import Image from "next/image";
// import { useState, useRef } from "react";
// import { useForm } from "react-hook-form";
// import toast, { Toaster } from "react-hot-toast";
// import { FaImage } from "react-icons/fa";

// type FormData = {
//   image: FileList | null;
//   name: string;
//   details: string;
//   affiliateLink: string;
// };

// export default function AddNewToolsForm() {

// const { data, isLoading, error } = useGetUserQuery("688572450b412a0bdd70db72");

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching user</div>;

//   const user = data?.data;
//   console.log("founder data ", user)

//   const {
//     register,
//     handleSubmit,
//     setValue,

//     formState: { errors },
//   } = useForm<FormData>();

//   const [preview, setPreview] = useState<string | null>(null);
//   const fileRef = useRef<HTMLInputElement | null>(null);

//   const handleImageClick = () => {
//     if (fileRef.current) {
//       fileRef.current.click(); // open file picker
//     }
//   };

//   const onSubmit = (data: FormData) => {
//     console.log("Submitted data:", data);
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setValue("image", e.target.files); // sync with react-hook-form
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (

//     <div className="relative z-10 ">
//       <Toaster position="top-right" />
//       <h1 className="text-center text-2xl md:text-[35px] text-white">Add New Tool</h1>
//       <div className=" px-4 flex items-center justify-center ">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="w-full max-w-[1150px] space-y-6 text-white bg-black py-8 md:px-12 rounded-lg"
//         >
//           {/* Tool Image */}
//           <div className="border border-primary p-4 rounded-lg">
//             <label className="block mb-3 font-medium  text-base ">
//               Tool Image
//             </label>
//             <div
//               onClick={handleImageClick}
//               className="bg-black h-48 rounded-lg flex items-center justify-center relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-red-600 transition"
//             >
//               {preview ? (
//                 <Image
//                   src={preview}
//                   width={100}
//                   height={100}
//                   alt="Tool Preview"
//                   className="object-contain h-full w-full"
//                 />
//               ) : (
//                 <FaImage className="text-gray-500 text-4xl" />
//               )}
//               <input
//                 type="file"
//                 accept="image/*"
//                 {...register("image", { required: "Tool image is required" })}
//                 ref={(e) => {
//                   register("image").ref(e);
//                   fileRef.current = e; // capture ref
//                 }}
//                 onChange={handleImageChange}
//                 className="hidden"
//               />
//             </div>
//             {errors.image && (
//               <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
//             )}
//           </div>

//           {/* Tool Name */}
//           <div className="border border-primary p-4 rounded-lg">
//             <label className="block mb-3 font-medium  text-base ">
//               Tool Name
//             </label>
//             <input
//               type="text"
//               {...register("name", { required: "Tool name is required" })}
//               className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none  focus:ring-2 focus:ring-red-600"
//               placeholder="AI Tool Name"
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
//             )}
//           </div>

//           {/* Tool Details */}
//           <div className="border border-primary p-4 rounded-lg">
//             <label className="block mb-3 font-medium  text-base ">
//               Tool Details
//             </label>
//             <textarea
//               {...register("details", { required: "Tool details are required" })}
//               rows={3}
//               className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none  focus:ring-2 focus:ring-red-600"
//               placeholder="Details about this tool"
//             />
//             {errors.details && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.details.message}
//               </p>
//             )}
//           </div>

//           {/* Affiliate Link */}
//           <div className="border border-primary p-4 rounded-lg">
//             <label className="block mb-3 font-medium  text-base ">
//               Affiliate Link
//             </label>
//             <input
//               type="url"
//               {...register("affiliateLink", {
//                 required: "Affiliate link is required",
//               })}
//               className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none  focus:ring-2 focus:ring-red-600"
//               placeholder="https://example.com"
//             />
//             {errors.affiliateLink && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.affiliateLink.message}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               onClick={() => toast.success("Submitted successfully!")}
//               className="bg-primary hover:bg-red-800 text-white text-sm px-10 py-2 rounded-md shadow mt-5"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>

//   );
// }








"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaImage } from "react-icons/fa";
import { useCreateToolMutation } from "@/redux/api/Tools/toolsApi";
import { useGetUserQuery } from "@/redux/api/Auth/authApi";
import { DecodedUser, getCurrentAuthUser } from "@/hooks/useCurrentUser";


type FormData = {
  toolId: string;
  name: string;
  description: string;
  price: number;
  commissionRate: number;
  image: FileList | null;
};

export default function AddNewToolsForm() {
  // Declare all Hooks at the top
  const [decodedUser, setDecodedUser] = useState<DecodedUser | null>(null);
  const [createTool, { isLoading: isSubmitting }] = useCreateToolMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  // Fetch decoded user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentAuthUser();
        console.log("Decoded User:", user);
        setDecodedUser(user);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        toast.error("Failed to load user data. Please log in again.");
      }
    };
    fetchUser();
  }, []);

  // Fetch user data, skip if no user ID
  const { data: userData, isLoading: userLoading, error: userError } = useGetUserQuery(
    decodedUser?.id || "",
    { skip: !decodedUser?.id }
  );

  // Render loading or error states
  if (!decodedUser) {
    return <div>Please log in to create a tool</div>;
  }

  if (decodedUser.role !== "founder") {
    return <div>Only founders can create tools</div>;
  }

  if (userLoading) {
    return <div>Loading user details...</div>;
  }

  if (userError || !userData) {
    console.error("User details fetch error:", userError);
    return <div>Error fetching user details. Please try again.</div>;
  }

  const user = userData?.data;
  const founderId = user?.roleData._id;
  if (!founderId) {
    console.error("Founder ID not found in userData:", userData);
    return <div>Error: Founder ID not found</div>;
  }

  const handleImageClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", e.target.files);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImageToImgBB = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("key", process.env.NEXT_PUBLIC_IMGBB_API_KEY || "");

    try {
      const response = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        return data.data.url;
      }
      throw new Error(data.error.message || "Image upload failed");
    } catch (error) {
      throw new Error("Failed to upload image to ImgBB");
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      let imageUrl = "";
      if (data.image && data.image[0]) {
        imageUrl = await uploadImageToImgBB(data.image[0]);
      }

      const toolData = {
        founderId,
        toolId: data.toolId,
        name: data.name,
        description: data.description,
        price: Number(data.price),
        commissionRate: Number(data.commissionRate),
        imageUrl,
      };

      console.log("Submitting tool data:", toolData);
      const response = await createTool(toolData).unwrap();
      toast.success(response.message || "Tool created successfully!");
    } catch (error) {
      toast.error("Failed to create tool. Please try again.");
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
          {/* Tool ID */}
          <div className="border border-primary p-4 rounded-lg">
            <label className="block mb-3 font-medium text-base">Tool ID</label>
            <input
              type="text"
              {...register("toolId", { required: "Tool ID is required" })}
              className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter unique tool ID (e.g., aimarket)"
            />
            {errors.toolId && <p className="text-red-500 text-sm mt-1">{errors.toolId.message}</p>}
          </div>

          {/* Tool Image */}
          <div className="border border-primary p-4 rounded-lg">
            <label className="block mb-3 font-medium text-base">Tool Image</label>
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
                  fileRef.current = e;
                }}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
          </div>

          {/* Tool Name */}
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

          {/* Tool Description */}
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

          {/* Price */}
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

          {/* Commission Rate */}
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

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-primary hover:bg-red-800 text-white text-sm px-10 py-2 rounded-md shadow mt-5 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}