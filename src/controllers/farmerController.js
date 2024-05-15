import initModels from '../models/init-models.js';
import sequelize from '../models/connect.js';
import { Sequelize } from 'sequelize';

import { responseData } from '../config/response.js';
import inventoryproduct from '../models/inventoryproduct.js';

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
export const editProduct = async (req, res) => {
    try{
    let {farmerID, productName} = req.params;


    let {quantity, price, image, description} = req.body;
    let getProduct = await model.inventoryproduct.findOne({
        where:{
            farmerID: farmerID,
            productName: productName,
        },
    });

    getProduct.quantity = quantity;
    getProduct.price = price;
    getProduct.image = image;
    getProduct.description = description;

    await model.inventoryproduct.update(getProduct.dataValues, {
        where:{
            inventoryProductID: getProduct.inventoryProductID,
        }

    })
    responseData(res, "successfully", getProduct, 200);
} catch(exception) {
    responseData(res, "Error...", "", 500);
}
};
export const removeProduct = async (req, res) => {
    try{
        let {farmerID, productName} = req.params;

        let getProductID = await model.inventoryproduct.findOne({
            where: {
                farmerID: farmerID,
                productName: productName,
            },
          });
   

        await inventoryproduct.destroy({
            where:{
                inventoryProductID: getProductID.inventoryProductID,
            },
        });

        responseData(res, "successfully", "", 200);
    } catch(exception){
        responseData(res, "Error...", "", 500);
    }
}; 
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


