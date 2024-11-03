import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/ProfileSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
