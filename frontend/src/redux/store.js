import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/counter/counterSlice";
import vinylApi from "./features/vinyls/vinylApi";
import ordersApi from "./features/orders/ordersApi";

// Create and configure the Redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer under the 'cart' key in the store
    [vinylApi.reducerPath]: vinylApi.reducer, // Add the vinyl API reducer using its unique path (required for RTK Query)
    [ordersApi.reducerPath]: ordersApi.reducer, // Add the orders API reducer using its unique path
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vinylApi.middleware, ordersApi.middleware), // Configure middleware to include the default middleware and RTK Query's middleware
});
