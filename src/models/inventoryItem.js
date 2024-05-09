import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class inventoryitem extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    farmerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'farmer',
        key: 'farmerID'
      }
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'productID'
      }
    }
  }, {
    sequelize,
    tableName: 'inventoryitem',
    timestamps: false,
    indexes: [
      {
        name: "farmerID",
        using: "BTREE",
        fields: [
          { name: "farmerID" },
        ]
      },
      {
        name: "productID",
        using: "BTREE",
        fields: [
          { name: "productID" },
        ]
      },
    ]
  });
  }
}
