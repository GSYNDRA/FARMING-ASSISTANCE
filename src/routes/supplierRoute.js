import express from "express";
import {
  orderProducts,
  searchProducts,
  updateProfile,
  getProductPage,
  getProfile,
  getTransaction,
  getDetailOfProduct,
  postComplaint,
  getDetailOfTransaction,
  uploadAvatar,
} from "../controllers/supplierController.js";

const supplierRoute = express.Router();

supplierRoute.get("/get-supplier/:supplierID", getProfile);
supplierRoute.put("/update/:supplierID", updateProfile);
supplierRoute.put("/order/:supplierID", orderProducts);
supplierRoute.get("/search/:productName", searchProducts);
supplierRoute.get("/get-page/:page", getProductPage);
supplierRoute.get("/transaction/:supplierID", getTransaction);
supplierRoute.get("/product-detail/:inventoryProductID", getDetailOfProduct);
supplierRoute.get("/order/:transactionID", getDetailOfTransaction);
supplierRoute.post("/complaint", postComplaint);

// API upload avatar
import upload from "../config/upload.js";

// yarn add multer
supplierRoute.post("/upload-avatar", upload.single("avatarImg"), uploadAvatar);

export default supplierRoute;
