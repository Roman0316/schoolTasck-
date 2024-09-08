const { DataTypes } = require('sequelize');

const BaseModel = require('./BaseModel');

module.exports = class Payment extends BaseModel {
  static modelName = 'payment';

  static tableName = 'payments';

  static protectedKeys = ['createdAt', 'updatedAt'];

  static Schema = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: { tableName: 'students' },
        key: 'id',
      },
      onDelete: 'SET NULL',
    },
    numberOfPaytment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      defaultValue: 'rubles',
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
      allowNull: false,
    },
  };

  static associate(models) {
    Payment.belongsTo(models.student, {
      foreignKey: {
        name: 'studentId',
        allowNull: true,
      },
    });
  }
};
