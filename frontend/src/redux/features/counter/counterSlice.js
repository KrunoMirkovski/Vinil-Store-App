import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

// Initial state for the cart
const initialState = {
  cartItems: [], // Array to store items added to the cart
};

// Create a Redux slice for the cart
const cartSlice = createSlice({
  name: `cart`,
  initialState,
  reducers: {
    // Reducer function to handle adding items to the cart
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
        // Show a success notification using SweetAlert2
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Vinyl added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      // If the item is already in the cart, prompt the user for confirmation
      else
        Swal.fire({
          title: "This vinyl is already in the cart",
          text: "You want another copy?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, add one more!",
        });
    },
  },
});

// Export the action creator for adding items to the cart
export const { addToCart } = cartSlice.actions;
// Export the reducer to be used in the store configuration
export default cartSlice.reducer;
