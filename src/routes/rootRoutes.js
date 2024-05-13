import express from "express";
import adminRoute from "./adminRoutes.js";

const rootRoute = express.Router();

rootRoute.use("/admin", adminRoute);

export default rootRoute;
