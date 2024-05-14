import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { INTEGER, Sequelize } from "sequelize";

import { responseData } from "../config/response.js";
import transaction from "../models/transaction.js";

let model = initModels(sequelize);
let Op = Sequelize.Op;

export const orderProducts = async (req, res) => {
  // try{
  let { supplierID } = req.params;
  const products = req.body.products;
  let newTransaction = await model.transaction.create({
    supplierID: supplierID
  });
  let totalPrice = 0;
  for (const product of products) {
    const { farmerID, productName, quantity } = product;

    const getProduct = await model.inventoryproduct.findOne({
      where: {
        farmerID: farmerID,
        productName: productName,
      },
    });
    await model.order.create({
        inventoryProductID: getProduct.inventoryProductID,
        transactionID: newTransaction.transactionID,
        price: getProduct.price,
        quantity: quantity,
        farmerID: farmerID

    });
    const data = await model.farmer.findOne({
      where: {
        farmerID: farmerID,
      },
      include: ["payment"],
    });

    const getReturnedMoney = await model.payment.findOne({
        where:{
            paymentID: data.paymentID, 
        }
    });

    let returnedMoney = getProduct.price * quantity;
    getReturnedMoney.balance += returnedMoney;

    await model.payment.update(getReturnedMoney.dataValues, {
      where: {
        paymentID: getReturnedMoney.paymentID ,
      },
    });

    totalPrice += getProduct.price * quantity;

    getProduct.quantity -= quantity;

    await model.inventoryproduct.update(getProduct.dataValues, {
      where: {
        inventoryProductID: getProduct.inventoryProductID,
      },
    });
  }

  newTransaction.totalPrice = totalPrice;
  await model.transaction.update(newTransaction.dataValues, {
    where: {
        transactionID: newTransaction.transactionID,
      },
  });

  const data = await model.supplier.findOne({
    where: {
      supplierID: supplierID,
    },
    include: ["payment"],
  });

  const newSupplierBalance = await model.payment.findOne({
    where:{
        paymentID: data.paymentID
    }
  });

  newSupplierBalance.balance -= totalPrice;

  await model.payment.update(newSupplierBalance.dataValues, {
    where: {
      paymentID: newSupplierBalance.paymentID,
    },
  });


  responseData(res, "successfully", "", 200);
  // } catch(exception){
  //     responseData(res, "Error...", "", 500);

  // }
};
