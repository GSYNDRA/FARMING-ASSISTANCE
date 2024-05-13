import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class order extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    orderID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    inventoryProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'inventoryproduct',
        key: 'inventoryProductID'
      }
    },
    transactionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transaction',
        key: 'transactionID'
      }
    },
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    farmerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'farmer',
        key: 'farmerID'
      }
    }
  }, {
    sequelize,
    tableName: 'order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderID" },
        ]
      },
      {
        name: "farmerID",
        using: "BTREE",
        fields: [
          { name: "farmerID" },
        ]
      },
      {
        name: "inventoryProductID",
        using: "BTREE",
        fields: [
          { name: "inventoryProductID" },
        ]
      },
      {
        name: "transactionID",
        using: "BTREE",
        fields: [
          { name: "transactionID" },
        ]
      },
    ]
  });
  }
}
