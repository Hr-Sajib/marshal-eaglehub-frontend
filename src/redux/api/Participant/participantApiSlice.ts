import { baseApi } from '../baseApi';

export const participantApiSlice = baseApi.injectEndpoints({
  endpoints: (Builder) => ({
    addParticipant: Builder.mutation({
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