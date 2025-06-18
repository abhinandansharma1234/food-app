import { configureStore } from "@reduxjs/toolkit";
import { foodReducer } from "./foodSlice";
import { cartReducer } from "./cartSlice";

const store = configureStore({
  reducer: {
    food: foodReducer,
    cart: cartReducer,
  },
});

export default store;
