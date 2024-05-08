import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class farmingTips extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    tipID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adminID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'admin',
        key: 'adminID'
      }
    }
  }, {
    sequelize,
    tableName: 'farmingTips',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tipID" },
        ]
      },
      {
        name: "adminID",
        using: "BTREE",
        fields: [
          { name: "adminID" },
        ]
      },
    ]
  });
  }
}
