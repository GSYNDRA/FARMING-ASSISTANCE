import express from 'express';
import{
    orderProducts,
    searchProducts,
    updateProfile,
    getProductPage
} from "../controllers/supplierController.js";

const supplierRoute = express.Router();

supplierRoute.put("/order/:supplierID", orderProducts);
supplierRoute.get("/search/:productName", searchProducts);
supplierRoute.put("/update/:supplierID", updateProfile);
supplierRoute.get("/get-page/:page", getProductPage);


export default supplierRoute;
