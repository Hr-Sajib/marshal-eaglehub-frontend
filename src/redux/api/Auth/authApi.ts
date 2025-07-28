import { baseApi } from "../baseApi";

// Define interfaces based on Postman response
interface RoleData {
  _id: string;
  userId: string;
  tools: string[];
  additionalNotes: string;
  influencerId?:string 
,
affiliations:string[]
  __v: number;
}

interface User {
  id: string;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  roleData: RoleData;
}

interface UserResponse {
  success: boolean;
  message: string;
  data: User;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<UserResponse, { firstName: string; lastName: string; email: string; password: string }>({
      query: (userData) => ({
        url: "/user",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    getCurrentUser: builder.query({
      query: () => "/auth/me", 
      providesTags: ["User"],
      // still not use
    }),
    getUserById: builder.query<UserResponse, string>({
      query: (id) => `/user/${id}`,
      providesTags: ["User"],
    }),
    getRoleBasedUserInfo: builder.query({
      query: (userId) => `/user/get-roleBase-info/${userId}`,
      providesTags: ["getRoleBasedUserInfo"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetCurrentUserQuery,
  useGetRoleBasedUserInfoQuery,
  useGetUserByIdQuery
} = authApi;
