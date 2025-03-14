// redux/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of the product in the cart
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string; // Add the image to each cart item
}

// Define the initial state for the cart
interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

// Create a slice for the cart
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add a product to the cart
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // If the item is already in the cart, increase the quantity
        state.items[itemIndex].quantity += 1;
      } else {
        // Otherwise, add the item to the cart
        state.items.push(action.payload);
      }
    },
    
    // Action to remove a product from the cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    // Action to clear all products from the cart (Buy Now or Checkout)
    clearCart: (state) => {
      state.items = [];
    },
    
    // Action to increase the quantity of a product in the cart
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      }
    },
    
    // Action to decrease the quantity of a product in the cart
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0 && state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      }
    },
  },
});

// Export the actions
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
