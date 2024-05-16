import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLocal } from "../../service/userLocal";
import { message } from "antd";

export const userThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload) => {
    try {
      userLocal.set(payload); //set on lstorage > not re-login after F5
      message.success("Login succes");
      console.log("payload:", payload);

      return payload;
    } catch (error) {
      console.log("error:", error);
    }
  }
);
