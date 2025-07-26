import { CreateToolRequest, ToolResponse, ToolsResponse, UpdateToolRequest } from "@/types/tools.type";
import { baseApi } from "../baseApi";




export const toolApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new tool
    createTool: builder.mutation<ToolResponse, CreateToolRequest>({
      query: (toolData) => ({
        url: '/tools',
        method: 'POST',
        body: toolData,
      }),
    }),

    // Get all tools
    getTools: builder.query<ToolsResponse, void>({
      query: () => ({
        url: '/tools',
        method: 'GET',
      }),
    }),

    // Get a single tool by ID
    getTool: builder.query<ToolResponse, string>({
      query: (id) => ({
        url: `/tools/${id}`,
        method: 'GET',
      }),
    }),

    // Update a tool
    updateTool: builder.mutation<ToolResponse, { id: string; data: UpdateToolRequest }>({
      query: ({ id, data }) => ({
        url: `/tools/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),

    // Delete a tool
    deleteTool: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tools/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Export hooks for usage in components
export const {
  useCreateToolMutation,
  useGetToolsQuery, 
  useGetToolQuery,
  useUpdateToolMutation,
  useDeleteToolMutation,
} = toolApi;