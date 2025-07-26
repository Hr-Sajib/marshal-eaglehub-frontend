import { baseApi } from "../baseApi";


const ChatManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTools: builder.query({
      query: () => "/chat",
      
     
    }),
    addTool: builder.mutation<any, any>({
      query: (order) => ({
        url: "/chat",
        method: "POST",
        body: order,
      }),
    
    }),
    giteSingleOrder: builder.query({
      query: (id) => `/order/${id}`,
    }),
  
    updateOrder: builder.mutation<any, any>({
      query: ({ id, ...patch }) => ({
        url: `/order/${id}`, // Changed to singular to match your backend
        method: "PATCH",
        body: patch,
      }),
     
    }),
   
  
  }),
});

