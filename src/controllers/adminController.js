import { responseData } from "../config/response.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

let model = initModels(sequelize);

// Get the admin information for the profile page, Can FE give the userID through the req.parms?
export const getAdmin = async (req, res) => {
  // try {
  let { userID } = req.params;
  let data = await model.admin.findOne({
    where: {
      userID: userID,
    },
    include: ["user"],
  });
  responseData(res, "Success", data, 200);
  // } catch {
  //   responseData(res, "Error ...", "", 500);
  // }
};

// update admin info, pending
// export const updateInfo = async (req, res) => {
//   try {
//     let { full_name, pass_word } = req.body;
//     let { userID } = req.params;
//     let getUser = await model.account.findOne({
//       where: {
//         userID,
//       },
//       include: []
//     });

//     await model.account.update(getUser.dataValues, {
//       where: {
//         userID,
//       },
//     });
//     responseData(res, "Update info success", "", 200);
//   } catch {
//     responseData(res, "Lỗi ...", "", 500);
//   }
// };

// Get all the tips, done
export const getTips = async (req, res) => {
  try {
    // Fetch all tips from the database
    let data = await model.farmingtips.findAll();

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
    let data = await model.farmingtips.create({
      title: title,
      content: content,
    });
    // Sending a success response
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// API get all the complaint, done
export const getComplaints = async (req, res) => {
  try {
    let data = await model.complaints.findAll({
      include: ["supplier", "farmer"],
    });
    // Sending a success response
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// API get all the transactions, done
export const getTransactions = async (req, res) => {
  try {
    let data = await model.transaction.findAll({
      include: ["supplier"],
    });
    // Sending a success response
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// Get all the orders of given transactionID receive using params, can FE give the transactionID through params?
export const getOrder = async (req, res) => {
  try {
    let { transactionID } = req.params;
    let data = await model.order.findAll({
      where: {
        transactionID,
      },
      include: ["inventoryProduct", "farmer"],
    });
    // Sending a success response
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};
// ----------------------------------------------------------
// API upload images, not done yet
// yarn add gifsicle@5.2.1 pngquant-bin@6.0.1
import compress_images from "compress-images";

export const uploadAvatar = async (req, res) => {
  //form-data
  let { file } = req;

  // Tối ưu hình, > 500KB mới nên tối ưu
  compress_images(
    process.cwd() + "/public/imgs/" + file.filename,
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "25"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
    },
    function (error, completed, statistic) {
      // xóa tấm hình chưa tối ưu
    }
  );

  //
  let { user_id } = req.params;

  let getUser = await model.admin.findOne({
    where: {
      user_id,
    },
  });

  getUser.avatar = file.filename;
  await model.admin.update(getUser.dataValues, {
    where: {
      user_id,
    },
  });

  res.send(file.filename);

  //tạo file -> data.txt: node 37
  // fs.readFile(process.cwd() + "/public/imgs/" + file.filename, (err, data) => {
  //   //
  //   // let newName =
  //   //   "data:image/jpeg;base64," + Buffer.from(data).toString("base64");
  //   let newName = `data:${file.mimetype}; base64, ${Buffer.from(data).toString(
  //     "base64"
  //   )}`;
  //   res.send(newName);
  //   return;
  // });

  // fs.writeFile(process.cwd() + "/public/file/data.txt", "node37", () => {});
  // fs.rename();
  // fs.copyFile();
  // fs.unlink();

  //  /public/img/${file.filename}
  // res.send(file);
};
