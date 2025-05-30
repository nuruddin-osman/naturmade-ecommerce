import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      return JSON.parse(cartData);
    }
  }
  return [];
};

const saveCartToLocalStorage = (cartItems) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
};

const initialState = {
  access:
    typeof window !== "undefined"
      ? window.localStorage.getItem("access")
      : false,
  refresh:
    typeof window !== "undefined"
      ? window.localStorage.getItem("refresh")
      : false,
  isAuthenticated: null,
  user: null,
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
        findProduct.totalPrice = findProduct.price * findProduct.quantity; //
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      saveCartToLocalStorage(state.items);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.price * item.quantity;
      }
      saveCartToLocalStorage(state.items);
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.price * item.quantity; // 🔹
      }
      saveCartToLocalStorage(state.items);
    },
    // ✅ LocalStorage from Redux Store, data load new Reducer
    loadCartFromStorage: (state) => {
      state.items = loadCartFromLocalStorage();
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  loadCartFromStorage,
} = cartSlice.actions;
export default cartSlice.reducer;
