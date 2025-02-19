import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../../../utils/baseURL";

// Configure the base query for API requests
const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL()}/api/vinyls/`, // Set the base URL for API requests
  credentials: "include", // Include credentials (cookies, authentication) in requests
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token"); // Retrieve the authentication token from local storage
    if (token) {
      Headers.set("Authorization", `Bearer ${token}`); // Attach the token to the request headers for authentication
    }
    return Headers;
  },
});

// Create an API slice using createApi
const vinylApi = createApi({
  reducerPath: "vinylApi", // The name of the slice in the Redux store
  baseQuery, // Use the configured base query
  tagTypes: ["Vinyls"], // Define tag types for automatic cache management
  endpoints: (builder) => ({
    // Fetch all vinyl records
    getAllVinyls: builder.query({
      query: () => "/",
      providesTags: ["Vinyls"],
    }),
    // Fetch a single vinyl record by ID
    getVinylById: builder.query({
      query: (id) => `${id}`,
      providesTags: (result, error, id) => [{ type: "Vinyls", id }],
    }),
    // Create a new vinyl record
    postVinyl: builder.mutation({
      query: (newVinyl) => ({
        url: `/create-vinyl`,
        method: "POST",
        body: newVinyl, // Send the new vinyl data in the request body
      }),
      invalidatesTags: ["Vinyls"], // Invalidate cache to trigger a refetch after creation
    }),
    // Update an existing vinyl record
    updateVinyl: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: rest, // Send the updated data in the request body
        headers: {
          "Content-Type": "application/json",
        }, // Ensure JSON format
      }),
      invalidatesTags: ["Vinyls"],
    }),
    // Delete a vinyl record
    deleteVinyl: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Vinyls"],
    }),
  }),
});

// Export hooks for each endpoint, allowing components to interact with the API
export const {
  useGetAllVinylsQuery,
  useGetVinylByIdQuery,
  usePostVinylMutation,
  useUpdateVinylMutation,
  useDeleteVinylMutation,
} = vinylApi;

// Export the API slice for use in the Redux store
export default vinylApi;
