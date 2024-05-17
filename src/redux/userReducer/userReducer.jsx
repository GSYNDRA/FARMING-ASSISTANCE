import { createSlice } from "@reduxjs/toolkit";
import { userInfor, userStore, userThunk, userTrans } from "./userThunk";
import { userLocal } from "../../service/userLocal";
import { cartLocal } from "../../service/cartLocal";

const initialState = {
  roleName: userLocal.getRoleName(),
  inforUser: userLocal.get(),
  userId: userLocal.getUserId(),
  list: [],
  cart: cartLocal.get(),
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

      userLocal.delete();
      cartLocal.delete();
      window.location.href = "/";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userThunk.fulfilled, (state, action) => {
        console.log("login success");
      })
      .addCase(userInfor.fulfilled, (state, action) => {
        console.log("infor success");
        state.inforUser = action.payload;
        userLocal.setInfor(action.payload);
      })
      .addCase(userTrans.fulfilled, (state, action) => {
        console.log("userTran success");
      })
      .addCase(userStore.fulfilled, (state, action) => {
        console.log(".addCase ~ action:", action.payload.data.content);
        state.list = action.payload.data.content;
        console.log("store success");
      });
  },
});

export const { setRole, logOutAction } = userReducer.actions;

export default userReducer.reducer;
