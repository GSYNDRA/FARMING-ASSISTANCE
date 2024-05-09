import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class complaints extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    complaintID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'complaints',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "complaintID" },
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
