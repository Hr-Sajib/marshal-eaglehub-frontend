// redux/api/baseApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log("backend api, ", `${process.env.NEXT_PUBLIC_URL}`);
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_URL,
  credentials: "include",
  prepareHeaders: (headers,{getState}) => {
  const token = (getState() as any).auth?.token;
    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["Products", "Orders", "User"], // Only non-user related tags
  endpoints: () => ({}),
});
