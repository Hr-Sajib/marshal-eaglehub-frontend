import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const participantApiSlice = createApi({
  reducerPath: 'participantApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Participant'],
  endpoints: (builder) => ({
    addParticipant: builder.mutation({
      query: (participantData) => ({
        url: '/participant/create-participant',
        method: 'POST',
        body: participantData,
      }),
      invalidatesTags: ['Participant'],
    })
  }),
});

export const { useAddParticipantMutation } = participantApiSlice;