import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class transaction extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    orderID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    supplierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'supplier',
        key: 'supplierID'
      }
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transaction',
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
        name: "supplierID",
        using: "BTREE",
        fields: [
          { name: "supplierID" },
        ]
      },
    ]
  });
  }
}
