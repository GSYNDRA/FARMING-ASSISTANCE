import { responseData } from "../config/response.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

import bcrypt from "bcrypt";

import {
  checkRefToken,
  checkToken,
  createRefToken,
  createToken,
  decodeToken,
} from "../config/jwt.js";

let model = initModels(sequelize);

export const login = async (req, res) => {};

export const tokenRef = async (req, res) => {};

export const logout = async (req, res) => {};
