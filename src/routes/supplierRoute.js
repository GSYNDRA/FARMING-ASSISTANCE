import express from "express";
import {
  getProfile,
  getDetailOfProduct,
  getTransaction,
  // updateProductQuantity,
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

// // //API put Inventory Product
// //supplierRoute.put("/:supplier-id/cart", putInventoryProduct)

// // //API post Transaction
supplierRoute.get("/cart/:supplierID", getTransaction);

export default supplierRoute;
