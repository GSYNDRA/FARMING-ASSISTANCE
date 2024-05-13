import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roleName: "farmer",
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.roleName = action.payload;
    },
  },
});

export const { setRole } = userReducer.actions;

export default userReducer.reducer;
