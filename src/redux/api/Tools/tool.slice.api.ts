import { baseApi } from "../baseApi";




// Updated payload interface to match your component needs

const orderManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTools: builder.query({
      query: () => "/tools",
      
     
    }),
    addTool: builder.mutation<any, any>({
      query: (order) => ({
        url: "/order",
        method: "POST",
        body: order,
      }),
    
    }),
    giteSingleOrder: builder.query({
      query: (id) => `/order/${id}`,
    }),
    // updateOrder: builder.mutation<Order, Partial<Order> & { id: number }>({
    //   query: ({ id, ...patch }) => ({
    //     url: `/order/${id}`,
    //     method: "PUT",
        
    updateOrder: builder.mutation<any, any>({
      query: ({ id, ...patch }) => ({
        url: `/order/${id}`, // Changed to singular to match your backend
        method: "PATCH",
        body: patch,
      }),
     
    }),
    deleteOrder: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
      }),
     
    }),
    getProductSegments: builder.query<any, void>({
      query: () => "/order/getProductSegmentation",
    
    }),
     getPaymentHistory: builder.query({
      query: (id) => `/payment/${id}/customersPayments`,
    }),
      insertPayment: builder.mutation<any, any>({
      query: (order) => ({
        url: "/payment",
        method: "POST",
        body: order,
      }),
    
    }),
  
  }),
});

export const {
useGetAllToolsQuery,
useAddToolMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useGetProductSegmentsQuery,
  useGiteSingleOrderQuery,
  useGetPaymentHistoryQuery,
  useInsertPaymentMutation
} = orderManagementApi;

export default orderManagementApi;