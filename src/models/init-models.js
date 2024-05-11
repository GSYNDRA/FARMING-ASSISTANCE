import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _account from  "./account.js";
import _admin from  "./admin.js";
import _complaints from  "./complaints.js";
import _farmer from  "./farmer.js";
import _farmingtips from  "./farmingtips.js";
import _inventory from  "./inventory.js";
import _inventoryproduct from  "./inventoryproduct.js";
import _order from  "./order.js";
import _product from  "./product.js";
import _role from  "./role.js";
import _supplier from  "./supplier.js";
import _transaction from  "./transaction.js";

export default function initModels(sequelize) {
  const account = _account.init(sequelize, DataTypes);
  const admin = _admin.init(sequelize, DataTypes);
  const complaints = _complaints.init(sequelize, DataTypes);
  const farmer = _farmer.init(sequelize, DataTypes);
  const farmingtips = _farmingtips.init(sequelize, DataTypes);
  const inventory = _inventory.init(sequelize, DataTypes);
  const inventoryproduct = _inventoryproduct.init(sequelize, DataTypes);
  const order = _order.init(sequelize, DataTypes);
  const product = _product.init(sequelize, DataTypes);
  const role = _role.init(sequelize, DataTypes);
  const supplier = _supplier.init(sequelize, DataTypes);
  const transaction = _transaction.init(sequelize, DataTypes);

  admin.belongsTo(account, { as: "user", foreignKey: "userID"});
  account.hasMany(admin, { as: "admins", foreignKey: "userID"});
  farmer.belongsTo(account, { as: "user", foreignKey: "userID"});
  account.hasMany(farmer, { as: "farmers", foreignKey: "userID"});
  supplier.belongsTo(account, { as: "user", foreignKey: "userID"});
  account.hasMany(supplier, { as: "suppliers", foreignKey: "userID"});
  complaints.belongsTo(farmer, { as: "farmer", foreignKey: "farmerID"});
  farmer.hasMany(complaints, { as: "complaints", foreignKey: "farmerID"});
  inventory.belongsTo(farmer, { as: "farmer", foreignKey: "farmerID"});
  farmer.hasMany(inventory, { as: "inventories", foreignKey: "farmerID"});
  order.belongsTo(farmer, { as: "farmer", foreignKey: "farmerID"});
  farmer.hasMany(order, { as: "orders", foreignKey: "farmerID"});
  inventoryproduct.belongsTo(inventory, { as: "inventory", foreignKey: "inventoryID"});
  inventory.hasMany(inventoryproduct, { as: "inventoryproducts", foreignKey: "inventoryID"});
  inventoryproduct.belongsTo(product, { as: "product", foreignKey: "productID"});
  product.hasMany(inventoryproduct, { as: "inventoryproducts", foreignKey: "productID"});
  order.belongsTo(product, { as: "product", foreignKey: "productID"});
  product.hasMany(order, { as: "orders", foreignKey: "productID"});
  account.belongsTo(role, { as: "role", foreignKey: "roleID"});
  role.hasMany(account, { as: "accounts", foreignKey: "roleID"});
  complaints.belongsTo(supplier, { as: "supplier", foreignKey: "supplierID"});
  supplier.hasMany(complaints, { as: "complaints", foreignKey: "supplierID"});
  transaction.belongsTo(supplier, { as: "supplier", foreignKey: "supplierID"});
  supplier.hasMany(transaction, { as: "transactions", foreignKey: "supplierID"});
  order.belongsTo(transaction, { as: "order", foreignKey: "orderID"});
  transaction.hasMany(order, { as: "orders", foreignKey: "orderID"});

  return {
    account,
    admin,
    complaints,
    farmer,
    farmingtips,
    inventory,
    inventoryproduct,
    order,
    product,
    role,
    supplier,
    transaction,
  };
}
