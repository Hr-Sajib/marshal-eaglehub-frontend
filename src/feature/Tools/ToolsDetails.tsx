


"use client";
import { useParams, useRouter } from "next/navigation";
import { useGetToolQuery, useDeleteToolMutation, useCreatePaymentMutation, useGenerateAfilateMutation } from "@/redux/api/Tools/toolsApi";
import { useSelector } from "react-redux";
import { currentUser } from "@/redux/api/Auth/auth.slice";
import { useGetUserByIdQuery } from "@/redux/api/Auth/authApi";
import { FaTrash, FaEdit, FaLink, FaShoppingCart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useGetAffiliateDeatilsDataQuery } from "@/redux/api/affiliate/affiliateApi";

export default function ToolDetails() {

  const params = useParams();
  const toolId = params?.id as string;
  const router = useRouter();
  const user = useSelector(currentUser);
  const { data: singleUser } = useGetUserByIdQuery(user?.id as string, {
    skip: !user?.id,
  });
  const { data: toolData, isLoading, error } = useGetToolQuery(toolId);
  const [deleteTool, { isLoading: isDeleting }] = useDeleteToolMutation();
  const [createPayment, { isLoading: isPaymentLoading }] = useCreatePaymentMutation();
const [AffiliateLInkGenerate]=useGenerateAfilateMutation()
  const influencerId = singleUser?.data?.roleData?.influencerId 

  const{ data, isError, isFetching } = useGetAffiliateDeatilsDataQuery(influencerId)
console.log("single data ",singleUser)
  console.log("cheke afllite data", data)
  console.log("Data===>>", influencerId)

  // Affiliate click tracking

console.log("tool data get ",toolData)

  const toolSingleData=toolData
  const userSingleData=singleUser?.data.roleData.affiliations
  const datas=userSingleData?.includes(toolData?.data.toolId as string)



console.log('check tools singe data',datas,toolData?.data.toolId)



  useEffect(() => {
    const influencerId = new URLSearchParams(window.location.search).get("ref");
    const source = new URLSearchParams(window.location.search).get("source");
    if (toolId && influencerId) {
      const body: any = { toolId, influencerId };
      if (typeof source === "string") {
        body.source = source;
      }
      console.log("Sending body:", body);
      fetch(`${process.env.NEXT_PUBLIC_URL}/affiliates/increment-click`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Backend response:", data);
          
        })
        .catch((err) => {
          console.error("Fetch error:", err);
        });
    }
  }, [toolId]);

  if (isLoading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error || !toolData?.data) {
    return <div className="text-white text-center">Error loading tool details</div>;
  }

  const tool = toolData.data;

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this tool?")) {
      try {
        await deleteTool(toolId).unwrap();
        toast.success("Tool deleted successfully!");
        router.push("/tool");
      } catch (err: any) {
        toast.error(err?.message || "Failed to delete tool. Please try again.");
        console.error("Delete tool error:", err);
      }
    }
  };

  const handleUpdate = () => {
    // Placeholder for update functionality
    toast.success("Update functionality coming soon!");
  };

  const handleGenerateAffiliateLink = () => {

    const userdataStore={
    influencerId:singleUser?.data.roleData.influencerId as string,
toolId:toolData?.data.toolId as string}

console.log("affiliate data",userdataStore)
try {
    AffiliateLInkGenerate(userdataStore)
    toast.success("Affiliate success fully created")
} catch (error) {
    
}

    // const affiliateUrl = `${window.location.origin}/tools/${toolId}?ref=${singleUser?.data?.roleData?._id}&source=web`;
    // navigator.clipboard.writeText(affiliateUrl).then(() => {
    //   toast.success("Affiliate URL copied to clipboard!");
    // }).catch(() => {
    //   toast.error("Failed to copy affiliate URL.");
    // });
  };

  const handleBuy = async () => {
    if (!user?.id) {
      toast.error("Please log in to make a purchase.");
      console.log("Payment failed: User ID is undefined", { user });
      return;
    }
    if (!toolData?.data) {
      toast.error("Tool data is not available. Please try again.");
      console.log("Payment failed: Tool data is undefined", { toolData });
      return;
    }
    console.log("Tool data for payment:", toolData.data); // Debug toolData
    const paymentData: {
      toolName: string;
      price: number;
      userId: string;
      toolId: string;
      influencerId?: string;
      
    } = {
      toolName: toolData.data.name,
      price: toolData.data.price,
      userId: user.id,
      toolId: toolData.data.toolId,
    };
    if (influencerId) {
      paymentData.influencerId = influencerId;
    }
    console.log("Payment data:", paymentData);
    console.log("Influencer ID:", influencerId);
    try {
      const response = await createPayment(paymentData).unwrap();
      console.log("Payment response:", response);
      toast.success(response.message || "Payment initiated successfully!");

      router.push(`${response.data.checkoutUrl}`)
    } catch (err: any) {
      console.error("Payment error:", err);
      toast.error(err?.data?.message || "Failed to initiate payment. Please try again.");
    }
  };

  const renderActions = () => {
    if (!user) {
      return (
        <div className="text-lg text-gray-400">
          Please <a href="/login" className="text-blue-500 underline">log in</a> to perform actions.
        </div>
      );
    }
    // Check for founder role and matching roleData._id
    if (user.role === "founder" && singleUser?.data?.roleData?._id === tool.founderId) {
      return (
        <div className="flex space-x-4">
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`flex items-center space-x-2 bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-md ${
              isDeleting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaTrash />
            <span>{isDeleting ? "Deleting..." : "Delete"}</span>
          </button>
          <button
            onClick={handleUpdate}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md"
          >
            <FaEdit />
            <span>Update</span>
          </button>
        </div>
      );
    }

    if (!datas) {
      return (
        <button
          onClick={handleGenerateAffiliateLink}
          className="flex items-center space-x-2 bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md"
        >
          <FaLink />
          <span>Generate Affiliate Link</span>
        </button>
      );
    }

    if (user.role === "user") {
      return (
        <button
          onClick={handleBuy}
          disabled={isPaymentLoading}
          className={`flex items-center space-x-2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-md ${
            isPaymentLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FaShoppingCart />
          <span>{isPaymentLoading ? "Processing..." : "Buy Now"}</span>
        </button>
      );
    }

    return (
      <div className="text-lg text-gray-400">
        You do not have permission to edit or delete this tool.
      </div>
    );
  };

  return (
    <div className="relative z-10 text-white px-4 py-8 max-w-4xl mx-auto">
      <Toaster position="top-right" />
      <h1 className="text-2xl md:text-4xl font-semibold mb-6">{tool.name}</h1>
      <div className="border border-primary rounded-lg overflow-hidden">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src={tool.imageUrl}
            alt={tool.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 space-y-4 bg-black">
          <p className="text-lg">
            <strong>Description:</strong> {tool.description}
          </p>
          <p className="text-lg">
            <strong>Price:</strong> ${tool.price}
          </p>
          <p className="text-lg">
            <strong>Commission Rate:</strong> {tool.commissionRate}%
          </p>
          <p className="text-lg">
            <strong>Tool ID:</strong> {tool.toolId}
          </p>
          <p className="text-lg">
            <strong>Founder ID:</strong> {tool.founderId}
          </p>
          <p className="text-lg">
            <strong>Status:</strong> {tool.isActive ? "Active" : "Inactive"}
          </p>
          {renderActions()}
        </div>
      </div>
    </div>
  );
}




// "use client";
// import { useParams, useRouter } from "next/navigation";
// import { useGetToolQuery, useDeleteToolMutation, useCreatePaymentMutation } from "@/redux/api/Tools/toolsApi";
// import { useSelector } from "react-redux";
// import { currentUser } from "@/redux/api/Auth/auth.slice";
// import { useGetUserByIdQuery } from "@/redux/api/Auth/authApi";
// import { FaTrash, FaEdit, FaLink, FaShoppingCart } from "react-icons/fa";
// import toast, { Toaster } from "react-hot-toast";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import { useGetAffiliateDeatilsDataQuery } from "@/redux/api/affiliate/affiliateApi";

// export default function ToolDetails({id}:{id:string}) {
//   const params = useParams();
//   const toolId = params?.id as string;
//   const router = useRouter();
//   const user = useSelector(currentUser);
//   const { data: singleUser } = useGetUserByIdQuery(user?.id as string, {
//     skip: !user?.id,
//   });
//   const { data: toolData, isLoading, error } = useGetToolQuery(toolId);
//   const [deleteTool, { isLoading: isDeleting }] = useDeleteToolMutation();
//   const [createPayment, { isLoading: isPaymentLoading }] = useCreatePaymentMutation();

//   const influencerId = singleUser?.data?.roleData?.influencerId 

//   const{ data, isError, isFetching } = useGetAffiliateDeatilsDataQuery(influencerId)

//   console.log("cheke afllite data", data)
//   console.log("Data===>>", influencerId)

//   // Affiliate click tracking
//   useEffect(() => {
//     const influencerId = new URLSearchParams(window.location.search).get("ref");
//     const source = new URLSearchParams(window.location.search).get("source");
//     if (toolId && influencerId) {
//       const body: any = { toolId, influencerId };
//       if (typeof source === "string") {
//         body.source = source;
//       }
//       console.log("Sending body:", body);
//       fetch(`${process.env.NEXT_PUBLIC_URL}/affiliates/increment-click`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("Backend response:", data);
//         })
//         .catch((err) => {
//           console.error("Fetch error:", err);
//         });
//     }
//   }, [toolId]);

//   if (isLoading) {
//     return <div className="text-white text-center">Loading...</div>;
//   }

//   if (error || !toolData?.data) {
//     return <div className="text-white text-center">Error loading tool details</div>;
//   }

//   const tool = toolData.data;

//   const handleDelete = async () => {
//     if (confirm("Are you sure you want to delete this tool?")) {
//       try {
//         await deleteTool(toolId).unwrap();
//         toast.success("Tool deleted successfully!");
//         router.push("/tool");
//       } catch (err: any) {
//         toast.error(err?.message || "Failed to delete tool. Please try again.");
//         console.error("Delete tool error:", err);
//       }
//     }
//   };

//   const handleUpdate = () => {
//     // Placeholder for update functionality
//     toast.success("Update functionality coming soon!");
//   };

//   const handleGenerateAffiliateLink = () => {
//     const affiliateUrl = `${window.location.origin}/tools/${toolId}?ref=${singleUser?.data?.roleData?._id}&source=web`;
//     navigator.clipboard.writeText(affiliateUrl).then(() => {
//       toast.success("Affiliate URL copied to clipboard!");
//     }).catch(() => {
//       toast.error("Failed to copy affiliate URL.");
//     });
//   };

//   const handleBuy = async () => {
//     if (!user?.id) {
//       toast.error("Please log in to make a purchase.");
//       console.log("Payment failed: User ID is undefined", { user });
//       return;
//     }
//     if (!toolData?.data) {
//       toast.error("Tool data is not available. Please try again.");
//       console.log("Payment failed: Tool data is undefined", { toolData });
//       return;
//     }
//     console.log("Tool data for payment:", toolData.data);
//     const paymentData: {
//       toolName: string;
//       price: number;
//       userId: string;
//       toolId: string;
//       influencerId?: string;
//     } = {
//       toolName: toolData.data.name,
//       price: toolData.data.price,
//       userId: user.id,
//       toolId: toolData.data.toolId,
//     };
//     if (influencerId) {
//       paymentData.influencerId = influencerId;
//     }
//     console.log("Payment data:", paymentData);
//     console.log("Influencer ID:", influencerId);
//     try {
//       const response = await createPayment(paymentData).unwrap();
//       console.log("Payment response:", response);
//       if (response.data?.url) {
//         window.location.href = response.data.url; // Redirect to payment URL
//         console.log("Redirecting to:", response.data.url);
//       } else {
//         throw new Error("Payment URL not provided in response");
//       }
//       toast.success(response.message || "Payment initiated successfully!");
//     } catch (err: any) {
//       console.error("Payment error:", err);
//       toast.error(err?.data?.message || "Failed to initiate payment. Please try again.");
//     }
//   };

//   const renderActions = () => {
//     if (!user) {
//       return (
//         <div className="text-lg text-gray-400">
//           Please <a href="/login" className="text-blue-500 underline">log in</a> to perform actions.
//         </div>
//       );
//     }
//     // Check for founder role and matching roleData._id
//     if (user.role === "founder" && singleUser?.data?.roleData?._id === tool.founderId) {
//       return (
//         <div className="flex space-x-4">
//           <button
//             onClick={handleDelete}
//             disabled={isDeleting}
//             className={`flex items-center space-x-2 bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-md ${
//               isDeleting ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             <FaTrash />
//             <span>{isDeleting ? "Deleting..." : "Delete"}</span>
//           </button>
//           <button
//             onClick={handleUpdate}
//             className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md"
//           >
//             <FaEdit />
//             <span>Update</span>
//           </button>
//         </div>
//       );
//     }

//     if (user.role === "influencer") {
//       return (
//         <button
//           onClick={handleGenerateAffiliateLink}
//           className="flex items-center space-x-2 bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md"
//         >
//           <FaLink />
//           <span>Generate Affiliate Link</span>
//         </button>
//       );
//     }

//     if (user.role === "user") {
//       return (
//         <button
//           onClick={handleBuy}
//           disabled={isPaymentLoading}
//           className={`flex items-center space-x-2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-md ${
//             isPaymentLoading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           <FaShoppingCart />
//           <span>{isPaymentLoading ? "Processing..." : "Buy Now"}</span>
//         </button>
//       );
//     }

//     return (
//       <div className="text-lg text-gray-400">
//         You do not have permission to edit or delete this tool.
//       </div>
//     );
//   };

//   return (
//     <div className="relative z-10 text-white px-4 py-8 max-w-4xl mx-auto">
//       <Toaster position="top-right" />
//       <h1 className="text-2xl md:text-4xl font-semibold mb-6">{tool.name}</h1>
//       <div className="border border-primary rounded-lg overflow-hidden">
//         <div className="relative h-[300px] md:h-[400px]">
//           <Image
//             src={tool.imageUrl}
//             alt={tool.name}
//             fill
//             className="object-cover"
//           />
//         </div>
//         <div className="p-6 space-y-4 bg-black">
//           <p className="text-lg">
//             <strong>Description:</strong> {tool.description}
//           </p>
//           <p className="text-lg">
//             <strong>Price:</strong> ${tool.price}
//           </p>
//           <p className="text-lg">
//             <strong>Commission Rate:</strong> {tool.commissionRate}%
//           </p>
//           <p className="text-lg">
//             <strong>Tool ID:</strong> {tool.toolId}
//           </p>
//           <p className="text-lg">
//             <strong>Founder ID:</strong> {tool.founderId}
//           </p>
//           <p className="text-lg">
//             <strong>Status:</strong> {tool.isActive ? "Active" : "Inactive"}
//           </p>
//           {renderActions()}
//         </div>
//       </div>
//     </div>
//   );
// }
