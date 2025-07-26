
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log('check base api',)
const baseQuery = fetchBaseQuery({
  baseUrl:`${process.env.NEXT_PUBLIC_URL}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
       const token = localStorage.getItem("accessToken")
      console.log("token", token);
      
      if (token) {
        headers.set("Authorization", `${token}`);
      }
    return headers;
  },
});
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["users"],
  endpoints: () => ({}),
});