import express from "express";
import adminRoute from "./adminRoutes.js";
import authRoute from "./authRoutes.js";

const rootRoute = express.Router();

rootRoute.use("/admin", adminRoute);

rootRoute.use("/auth", authRoute);

export default rootRoute;
