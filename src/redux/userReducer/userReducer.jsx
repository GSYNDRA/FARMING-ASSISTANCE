import { createSlice } from "@reduxjs/toolkit";
import { userInfor, userThunk } from "./userThunk";
import { userLocal } from "../../service/userLocal";

const initialState = {
  roleName: userLocal.getRoleName(),
  inforUser: userLocal.get(),
  userId: userLocal.getUserId(),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.roleName = action.payload;
      userLocal.setRole(action.payload);
    },
    logOutAction: (state, action) => {
      state.inforUser = null;
      localStorage.removeItem("token");
      userLocal.delete();
      window.location.href = "/";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userThunk.fulfilled, (state, action) => {
        console.log("login success");
      })
      .addCase(userInfor.fulfilled, (state, action) => {
        console.log(".addCase ~ action:", action.payload);
        state.inforUser = action.payload;
        userLocal.setInfor(action.payload);
      });
  },
});

export const { setRole, logOutAction } = userReducer.actions;

export default userReducer.reducer;
