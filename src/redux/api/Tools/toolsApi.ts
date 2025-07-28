// import { CreateToolRequest, ToolResponse, ToolsResponse, UpdateToolRequest } from "@/types/tools.type";
// import { baseApi } from "../baseApi";




// export const toolApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     // Create a new tool
//     createTool: builder.mutation<ToolResponse, CreateToolRequest>({
//       query: (toolData) => ({
//         url: '/tools',
//         method: 'POST',
//         body: toolData,
//       }),
//     }),

//     // Get all tools
//     getTools: builder.query<ToolsResponse, void>({
//       query: () => ({
//         url: '/tools',
//         method: 'GET',
//       }),
//     }),

//     // Get a single tool by ID
//     getTool: builder.query<ToolResponse, string>({
//       query: (id) => ({
//         url: `/tools/by-toolid/${id}`,
//         method: 'GET',
//       }),
//     }),

//     // Update a tool
//     updateTool: builder.mutation<ToolResponse, { id: string; data: UpdateToolRequest }>({
//       query: ({ id, data }) => ({
//         url: `/tools/${id}`,
//         method: 'PATCH',
//         body: data,
//       }),
//     }),

//     // Delete a tool
//     deleteTool: builder.mutation<void, string>({
//       query: (id) => ({
//         url: `/tools/${id}`,
//         method: 'DELETE',
//       }),
//     }),

//     createPayment: builder.mutation<ToolResponse, CreateToolRequest>({
//       query: (toolData) => ({
//         url: '/payment/create-checkout-session',
//         method: 'POST',
//         body: toolData,
//       }),
//     }),
//   }),
// });

// // Export hooks for usage in components
// export const {
//   useCreateToolMutation,
//   useGetToolsQuery, 
//   useGetToolQuery,
//   useUpdateToolMutation,
//   useDeleteToolMutation,
//   useCreatePaymentMutation
// } = toolApi;


import { baseApi } from "../baseApi";
import { CreateToolRequest, ToolResponse, ToolsResponse, UpdateToolRequest } from "@/types/tools.type";

export interface PaymentRequest {
  toolName: string;
  price: number;
  userId: string;
  toolId: string;
  influencerId?: string;
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  data: {
    paymentId: string;
    status?: string;
    transactionId?: string;
    checkoutUrl?:string
  };
}

export const toolApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new tool
    createTool: builder.mutation<ToolResponse, CreateToolRequest>({
      query: (toolData) => ({
        url: "/tools",
        method: "POST",
        body: toolData,
      }),
    }),
    generateAfilate: builder.mutation({
      query: (toolData) => ({
        url: "/affiliates",
        method: "POST",
        body: toolData,
      }),
    }),
    // Get all tools
    getTools: builder.query<ToolsResponse, void>({
      query: () => ({
        url: "/tools",
        method: "GET",
      }),
    }),
    // Get a single tool by ID
    getTool: builder.query<ToolResponse, string>({
      query: (id) => ({
        url: `/tools/by-toolid/${id}`,
        method: "GET",
      }),
    }),
    // Update a tool
    updateTool: builder.mutation<ToolResponse, { id: string; data: UpdateToolRequest }>({
      query: ({ id, data }) => ({
        url: `/tools/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    // Delete a tool
    deleteTool: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tools/${id}`,
        method: "DELETE",
      }),
    }),
    // Create a payment
    createPayment: builder.mutation<PaymentResponse, PaymentRequest>({
      query: (data) => {
        console.log("JSON data:", data);
        return {
          url: "/payment/create-checkout-session",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

// Export hooks for usage in components
export const {
  useCreateToolMutation,
  useGetToolsQuery,
  useGetToolQuery,
  useUpdateToolMutation,
  useDeleteToolMutation,
  useCreatePaymentMutation,
  useGenerateAfilateMutation
} = toolApi;
