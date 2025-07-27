import { baseApi } from "../baseApi";


const ChatManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyChats: builder.query({
      query: () => "/chat",
      
    }),
    createChate: builder.mutation<any, any>({
      query: (data) => ({
        url: "/chat",
        method: "POST",
        body: data,
      }),
    
    }),
     sendMessage: builder.mutation<any, any>({
      query: ({data}) => ({
        url: `/chat/${data?.currenId}/messages`,
        method: "POST",
        body: data
      }),
    
    }),
  
  
  
  }),
});

export const {
  useGetMyChatsQuery,
  useSendMessageMutation
  ,
  useCreateChateMutation
  
}=ChatManagementApi

export default ChatManagementApi

