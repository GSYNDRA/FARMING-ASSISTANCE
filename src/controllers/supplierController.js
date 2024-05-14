import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Sequelize } from "sequelize";
import { responseData } from "../config/response.js";
import farmer from "../models/farmer.js";
import complaints from "../models/complaints.js";

let model = initModels(sequelize);
let Op = Sequelize.Op;

export const getProfile = async (req, res) => {
  try {
    let { supplierID } = req.params;
    let data = await model.supplier.findAll({
      where: {
        supplierID,
      },
    });
    responseData(res, "successfully", data, 200);
  } catch (exception) {
    responseData(res, "Error...", "", 500);
  }
};

export const getDetailOfProduct = async (req, res) => {
  try {
    const { inventoryProductID } = req.params;
    let data = await model.inventoryproduct.findAll({
      where: { inventoryProductID: inventoryProductID },
      include: [
        {
          model: model.farmer,
          as: "farmer",
          attributes: ["farmerName", "phone", "email"],
        },
      ],
    });
    responseData(res, "successfully", data, 200);
  } catch (exception) {
    responseData(res, "Error...", "", 500);
  }
};

// export const postTransaction = async (req, res) => {
//   // Get supplier ID from URL params

//   try {
//     // Assuming req.body contains the transaction data, adapt this to your actual request body
//     const { supplierID } = req.params;
//     const { code, totalPrice } = req.body;

//     // Create the transaction in your database
//     const transaction = await model.transaction.create({
//       supplierID,
//       code,
//       totalPrice,
//       // Add other transaction data here as needed
//     });

//     // Send a success response
//     responseData(res, "Transaction created successfully", transaction, 201);
//   } catch (error) {
//     // Handle errors
//     console.error("Error creating transaction:", error);
//     responseData(res, "Error creating transaction", null, 500);
//   }
// };

export const postComplaint = async (req, res) => {
  const { supplierId } = req.params; // Get supplier ID from URL params

  try {
    // Assuming req.body contains the complaint data, adapt this to your actual request body
    const { content, supplierID, farmerID } = req.body;

    // Create the complaint in your database
    const complaint = await model.complaints.create({
      content,
      supplierID,
      farmerID,

      // Add other complaint data here as needed
    });

    // Send a success response
    responseData(res, "Complaint created successfully", complaint, 201);
  } catch (error) {
    // Handle errors
    console.error("Error creating complaint:", error);
    responseData(res, "Error creating complaint", null, 500);
  }
};
