import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLocal } from "../../service/userLocal";
import { message } from "antd";
import { userService } from "../../service/userService";
import { useNavigate } from "react-router-dom";

export const userThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload) => {
    try {
      const data = await userService.postLogin(payload);
      const userID = data.data.content.userID;
      userLocal.setId(userID);

      message.success("Login succes");

      return payload;
    } catch (error) {
      console.log("error:", error);
      message.success("Login fail");
    }
  }
);
export const userInfor = createAsyncThunk(
  "userReducer/userInfor",
  async (payload) => {
    try {
      const inforUser = await userService.getInfor(
        payload,
        userLocal.getRoleName()
      );
      return inforUser.data.content;
    } catch (error) {
      console.log("error:", error);
    }
  }
);
export const userTrans = createAsyncThunk(
  "userReducer/transaction",
  async (payload) => {
    try {
      const trans = await userService.getTrans(
        payload,
        userLocal.getRoleName()
      );
      return trans.data.content;
    } catch (error) {
      console.log("error:", error);
    }
  }
);
