// import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { state } from "./reducers";

//actually build the store
export const store = configureStore({
  reducer: state,
});
