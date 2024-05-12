import { responseData } from "../config/response.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import bcrypt from "bcrypt";
import { decodeToken } from "../config/jwt.js";
import farmingtips from "../models/farmingtips.js";
import complaints from "../models/complaints.js";
import account from "../models/account.js";
import supplier from "../models/supplier.js";
import role from "../models/role.js";
import farmer from "../models/farmer.js";
import transaction from "../models/transaction.js";

let model = initModels(sequelize);

// SELECT * FROM account WHERE roleID = 3, wait for auth to get the userID
export const getAdmin = async (req, res) => {
  try {
    const { userID } = req;
    let data = await model.account.findOne({
      where: {
        userID: userID,
      },
    });
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// Get all the tips, done
export const getAllTips = async (req, res) => {
  try {
    // Fetch all tips from the database
    let data = await farmingtips.findAll();

    // Sending a success response with the tips
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// Add the new tips in admin side, done
export const addTip = async (req, res) => {
  try {
    let { title, content } = req.body;
    let data = await farmingtips.create({
      title: title,
      content: content,
    });
    // Sending a success response
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// API get all the complaint, pending to have name included
export const getAllComplaints = async (req, res) => {
  try {
    let data = await complaints.findAll({
      // include: [],
    });
    // Sending a success response
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// API get all the complaint, pending to have order and product included
export const getAllTransactions = async (req, res) => {
  try {
    let data = await transaction.findAll({
      // include: [],
    });
    // Sending a success response
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};
