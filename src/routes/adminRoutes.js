import express from "express";
import {
  addTip,
  getAdmin,
  getAllComplaints,
  getAllTips,
  getAllTransactions,
} from "../controllers/adminController.js";

const adminRoute = express.Router();

// API get admin info
adminRoute.get("/get-admin", getAdmin);

// API get all the tips
adminRoute.get("/tip", getAllTips);

// API post new tips
adminRoute.post("/add-tip", addTip);

// API get all complaints
adminRoute.get("/complaint", getAllComplaints);

// API get all complaints
adminRoute.get("/transaction", getAllTransactions);

// // API get admin's information
// adminRoute.get("/get-info-admin", getInfoAdmin);

export default adminRoute;
