import initModels from '../models/init-models.js';
import sequelize from '../models/connect.js';
import { Sequelize } from 'sequelize';

import { responseData } from '../config/response.js';

let model = initModels(sequelize);
let Op = Sequelize.Op;

// export const getProfile = async (req, res) => {};
// export const editProfile = async (req, res) => {};

export const getTips = async (req, res) => {
     try{
        let data = await model.farmingtips.findAll({});
        responseData(res, "successfully", data, 200);

     } catch (exception){
         responseData(res, "Error...", "", 500);
     }
};
// export const editProduct = async (req, res) => {}; (have the idea for this one)
// export const removeProduct = async (req, res) => {}; (have the idea for this one)
export const addProduct = async (req, res) => {
    try {
  let { farmerID } = req.params;
  let { productName, quantity, price, image, description } = req.body;
  let data = await model.inventoryproduct.create({
    farmerID: farmerID,
    productName,
    quantity,
    price,
    image,
    description,
  });
  // Sending a success response
  responseData(res, "Successfully", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
}; 

export const getProduct = async (req, res) => { 
    try{
    let {farmerID} = req.params; 
    let data = await model.inventoryproduct.findAll({
        where:{
            farmerID: farmerID
        },
    });
    responseData(res, "successfully", data, 200);
    } catch (exception){
                responseData(res, "Error...", "", 500);

    }
};


