/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from '../baseApi';

export const InfluencerApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
     getInfluencerInfo: builder.query<any, void>({
      query: (influencerId) => `/affiliates/influencer/${influencerId}`,
      providesTags: ["influencerInfo"],
    }),
  }),
});

export const { useGetInfluencerInfoQuery } = InfluencerApiSlice;