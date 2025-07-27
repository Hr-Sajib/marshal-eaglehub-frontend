/* eslint-disable @typescript-eslint/no-explicit-any */
// src/api/giveawayApi.ts

import { baseApi } from "../baseApi";

export const giveawayApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createGiveaway: builder.mutation({
      query: (giveawayData) => ({
        url: "/giveaway/create-giveaway",
        method: "POST",
        body: giveawayData,
      }),
      invalidatesTags: ["Giveaway"],
    }),
    getGiveaways: builder.query({
      query: () => "/giveaway",
      providesTags: ["Giveaway"],
    }),
    getGiveawayStats: builder.query<any, void>({
      query: () => "/giveaway/stats",
      providesTags: ["Giveaway"],
    }),

    getGiveawayById: builder.query({
      query: (id) => `/giveaway/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Giveaway", id }],
    }),
    updateGiveaway: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/giveaway/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Giveaway", id }],
    }),
    deleteGiveaway: builder.mutation({
      query: (id) => ({
        url: `/giveaway/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Giveaway"],
    }),
  }),
});

export const {
  useCreateGiveawayMutation,
  useGetGiveawaysQuery,
  useGetGiveawayByIdQuery,
  useUpdateGiveawayMutation,
  useDeleteGiveawayMutation,
  useGetGiveawayStatsQuery,
} = giveawayApi;
