import express from 'express';
import farmerRoute from './farmerRoute.js';
import authRoute from './authRoute.js'

const rootRoute = express.Router();

rootRoute.use("/farmer", farmerRoute)

rootRoute.use("/auth", authRoute)


export default rootRoute;

