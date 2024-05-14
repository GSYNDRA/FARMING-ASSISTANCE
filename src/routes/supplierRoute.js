import express from "express";
import {
  getProfile,
  getDetailOfProduct,
  //postTransaction,
  postComplaint,
} from "../controllers/supplierController.js";

const supplierRoute = express.Router();

// // //API lấy thông tin profile
supplierRoute.get("/profile/:supplierID", getProfile);

// // //API lấy thông tin sản phẩm
supplierRoute.get("/store/detail/:inventoryProductID", getDetailOfProduct);

// // //API post complaint
supplierRoute.post("/complaint", postComplaint);

// // //API get product
supplierRoute.get("/");

// // //API put Inventory Product
// //supplierRoute.put("/:supplier-id/cart", putInventoryProduct)

// // //API post Transaction
//supplierRoute.post("/cart/:supplier-id", postTransaction);

export default supplierRoute;
