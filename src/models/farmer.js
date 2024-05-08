import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class farmer extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    farmerID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'account',
        key: 'userID'
      }
    }
  }, {
    sequelize,
    tableName: 'farmer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "farmerID" },
        ]
      },
      {
        name: "userID",
        using: "BTREE",
        fields: [
          { name: "userID" },
        ]
      },
    ]
  });
  }
}
