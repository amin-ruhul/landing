import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./feature/cartSlice";

const combineReducer = combineReducers({
  cart: cartSlice,
});

const store = configureStore({
  reducer: combineReducer,
});

export default store;
