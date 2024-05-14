import express from 'express';
import{
    orderProducts,
} from "../controllers/supplierController.js";

const supplierRoute = express.Router();

supplierRoute.put("/order/:supplierID", orderProducts);


export default supplierRoute;
