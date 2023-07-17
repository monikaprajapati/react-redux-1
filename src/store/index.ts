// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authenticationReducer from "./authenticationSlice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authenticationReducer },
});

export default store;