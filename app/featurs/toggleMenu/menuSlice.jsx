// menuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const cartData = localStorage.getItem("aTOzCategory");
    if (cartData) {
      return JSON.parse(cartData);
    }
  }
  return [];
};

const saveCartToLocalStorage = (cartItems) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("aTOzCategory", JSON.stringify(cartItems));
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
  activeMenu: null, // Tracks the currently active menu or popup
  isMenuOpen: false, // Determines if the menu or popup is open
  visibleComponent: null, // Tracks which component to show (e.g., "products", "findVitamins", etc.)
  fetchData: loadCartFromLocalStorage(),
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    closeMenu: (state) => {
      state.activeMenu = null;
      state.isMenuOpen = false;
      state.visibleComponent = null; // Hide all components when the menu is closed
    },
    toggleMenu: (state, action) => {
      if (state.activeMenu === action.payload) {
        state.activeMenu = null;
        state.isMenuOpen = false;
        state.visibleComponent = null; // Hide all components when toggling off
      } else {
        state.activeMenu = action.payload;
        state.isMenuOpen = true;
        state.visibleComponent = action.payload; // Show the component based on the menu clicked
      }
    },
    hideComponent: (state) => {
      state.visibleComponent = null; // Explicitly hide all components
    },
    setFetchData: (state, action) => {
      state.fetchData = action.payload;
      saveCartToLocalStorage(action.payload);
    },
    // ✅ LocalStorage from Redux Store, data load new Reducer
    loadDataFromStorage: (state) => {
      state.fetchData = loadCartFromLocalStorage();
    },
  },
});

export const {
  openMenu,
  closeMenu,
  toggleMenu,
  hideComponent,
  setFetchData,
  loadDataFromStorage,
} = menuSlice.actions;
export default menuSlice.reducer;
