import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.js";
import userReducer from "../features/users/userSlice.js";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
});
