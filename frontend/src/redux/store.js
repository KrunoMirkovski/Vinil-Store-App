import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
