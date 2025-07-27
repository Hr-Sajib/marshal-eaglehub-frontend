// redux/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getCookie } from "cookies-next";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["Products", "Orders", "User", "Giveaway", "CurrentGiveaway", "AllOngoingGiveawayIds", "Participant"], // Only non-user related tags
  endpoints: () => ({}),
});
