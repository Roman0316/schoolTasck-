const { DataTypes } = require('sequelize');
const { v4: uuid } = require('uuid');

const BaseModel = require('./BaseModel');
const { userRoles } = require('../constants/index');

module.exports = class Referer extends BaseModel {
  static modelName = 'referer';

  static tableName = 'referers';

  static protectedKeys = ['createdAt', 'updatedAt'];

  static Schema = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      protected: true,
    },
    role: {
      type: DataTypes.ENUM(...Object.values(userRoles)),
      defaultValue: userRoles.referer,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      defaultValue: 'null',
      allowNull: false,

    },
  };
};
