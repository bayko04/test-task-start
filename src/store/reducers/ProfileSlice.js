import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setName, setEmail } = ProfileSlice.actions;
export default ProfileSlice.reducer;
