import { createSlice } from "@reduxjs/toolkit";
import { userThunk } from "./userThunk";
import { userLocal } from "../../service/userLocal";

const initialState = {
  roleName: "farmer",
  inforUser: userLocal.get(),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.roleName = action.payload;
    },
    logOutAction: (state, action) => {
      state.infoUser = null;
      localStorage.removeItem("token");
      userLocal.delete();
      window.location.href = "/";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userThunk.fulfilled, (state, action) => {
      state.inforUser = action.payload;
      userLocal.set(action.payload);
    });
  },
});

export const { setRole, logOutAction } = userReducer.actions;

export default userReducer.reducer;
