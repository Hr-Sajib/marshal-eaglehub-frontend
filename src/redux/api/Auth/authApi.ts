
// import { baseApi } from "../baseApi";

// export const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     registerUser: builder.mutation({
//       query: (userData) => ({
//         url: "/user",
//         method: "POST",
//         body: userData,
//       }),
//       invalidatesTags: ["User"],
//     }),
//     loginUser: builder.mutation({
//       query: (credentials) => ({
//         url: "/auth/login",
//         method: "POST",
//         body: credentials,
//       }),
//       invalidatesTags: ["User"],
//     }),
//     getCurrentUser: builder.query({
//       query: () => "/auth/me",
//       providesTags: ["User"],
//     }),
//   }),
// });

// export const {
//   useRegisterUserMutation,
//   useLoginUserMutation,
//   useGetCurrentUserQuery,
// } = authApi;




import { baseApi } from "../baseApi";

// Define interfaces based on Postman response
interface RoleData {
  _id: string;
  userId: string;
  tools: string[];
  additionalNotes: string;
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
    loginUser: builder.mutation<UserResponse, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    getCurrentUser: builder.query<UserResponse, void>({
      query: () => "/auth/me",
      providesTags: ["User"],
    }),
    getUser: builder.query<UserResponse, string>({
      query: (id) => `/user/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetCurrentUserQuery,
  useGetUserQuery,
} = authApi;
