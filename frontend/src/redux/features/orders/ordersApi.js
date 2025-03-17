import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../../../utils/baseUrl";
// Create RTK Query API slice for handling orders
const ordersApi = createApi({
  reducerPath: "ordersApi", // Reducer name in Redux state
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL()}/api/orders`,
    credentials: "include", // Include credentials (cookies) for authentication
  }),
  tagTypes: ["Orders"], // Tag used for cache invalidation
  // Mutation endpoint to create a new order
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/", // POST to `/api/orders/`
        method: "POST",
        body: newOrder,
        credentials: "include",
      }),
    }),
    // Query endpoint to get orders by email
    getOrderByEmail: builder.query({
      query: (email) => ({
        url: `/email/${email}`, // GET `/api/orders/email/:email
      }),
      providesTags: ["Orders"],
    }),
  }),
});
// Export hooks for components to use the API endpoints
export const { useCreateOrderMutation, useGetOrderByEmailQuery } = ordersApi;
export default ordersApi;
