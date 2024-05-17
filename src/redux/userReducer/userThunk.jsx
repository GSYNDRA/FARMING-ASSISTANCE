import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLocal } from "../../service/userLocal";
import { message } from "antd";
import { userService } from "../../service/userService";

export const userThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload) => {
    try {
      const data = await userService.postLogin(payload);
      const userID = data.data.content.userID;
      console.log("userID:", userID);
      const inforUser = await userService.getInfor(userID, payload.roleID);
      console.log("inforUser:", inforUser);

      userLocal.set(payload); //set on lstorage > not re-login after F5
      message.success("Login succes");

      return payload;
    } catch (error) {
      console.log("error:", error);
      message.success("Login fail");
    }
  }
);
