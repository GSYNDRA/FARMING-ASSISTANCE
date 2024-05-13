import express from 'express';
import{
    // getProfile,
    // editProfile,
    getTips,
    getProduct,
    editProduct,
    removeProduct,
    addProduct
} from "../controllers/farmerController.js";

const farmerRoute = express.Router();

// farmerRoute.get("/:farmerId/profile", getProfile);

// farmerRoute.put("/:farmerId/profile/update", editProfile);

farmerRoute.get("/tips", getTips);

farmerRoute.get("/inventory/:farmerID", getProduct);

farmerRoute.put("/inventory/:farmerID/:productName", editProduct);

farmerRoute.delete("/inventory/:farmerID/:productName", removeProduct);

farmerRoute.post("/inventory/:farmerID", addProduct);


export default farmerRoute;