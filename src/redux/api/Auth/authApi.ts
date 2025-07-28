import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
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
      query: () => "/auth/me", // still not used
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
} = authApi;
