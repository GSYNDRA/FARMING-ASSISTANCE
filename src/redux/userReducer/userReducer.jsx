import { createSlice } from "@reduxjs/toolkit";
import {
  transDetail,
  updateInforUser,
  userInfor,
  userStore,
  userThunk,
  userTrans,
} from "./userThunk";
import { userLocal } from "../../service/userLocal";
import { cartLocal } from "../../service/cartLocal";

const initialState = {
  roleName: userLocal.getRoleName(),
  inforUser: userLocal.get(),
  userId: userLocal.getUserId(),
  list: [],
  cart: cartLocal.get(),
  transList: [],
  detailTransList: [],
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
        state.transList = action.payload;
        console.log("userTran success");
      })
      .addCase(transDetail.fulfilled, (state, action) => {
        console.log(".addCase ~ action:", action.payload);
        console.log("trans success");
        state.detailTransList = action.payload;
      })
      .addCase(userStore.fulfilled, (state, action) => {
        state.list = action.payload.data.content;
        console.log("store success");
      })
      .addCase(updateInforUser.fulfilled, (state, action) => {});
  },
});

export const { setRole, logOutAction } = userReducer.actions;

export default userReducer.reducer;
