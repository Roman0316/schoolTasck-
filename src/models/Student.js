const { DataTypes } = require('sequelize');

const BaseModel = require('./BaseModel');
const { userRoles } = require('../constants/index');

module.exports = class Student extends BaseModel {
  static modelName = 'student';

  static tableName = 'students';

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
      defaultValue: userRoles.invited,
      allowNull: false,
    },
  };

  static associate(models) {
    Student.belongsToMany(models.lesson, {
      foreignKey: {
        name: 'studentId',
        allowNull: true,
      },
      through: models.studLesson,
    });
  }
};
