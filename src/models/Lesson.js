const { DataTypes } = require('sequelize');

const BaseModel = require('./BaseModel');

module.exports = class Lesson extends BaseModel {
  static modelName = 'lesson';

  static tableName = 'lessons';

  static protectedKeys = ['createdAt', 'updatedAt'];

  static Schema = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  };

  static associate(models) {
    Lesson.belongsToMany(models.student, {
      foreignKey: {
        name: 'lessonId',
        allowNull: true,
      },
      through: models.studLesson,
    });

    Lesson.belongsToMany(models.referer, {
      foreignKey: {
        name: 'lessonId',
        allowNull: true,
      },
      through: models.refLesson,
    });
  }
};
