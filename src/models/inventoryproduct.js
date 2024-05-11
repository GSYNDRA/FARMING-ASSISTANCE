import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class inventoryproduct extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    inventoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'inventory',
        key: 'inventoryID'
      }
    },
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'productID'
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
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inventoryproduct',
    timestamps: false,
    indexes: [
      {
        name: "inventoryID",
        using: "BTREE",
        fields: [
          { name: "inventoryID" },
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
