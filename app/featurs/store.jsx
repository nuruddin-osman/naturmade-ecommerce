import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./toggleMenu/menuSlice";
import cartReducer from "./producatCardSlice/cartSlice";
export const store = configureStore({
  reducer: {
    menuReducers: menuReducer,
    cart: cartReducer,
  },
});
