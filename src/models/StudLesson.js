const { DataTypes } = require('sequelize');

const BaseModel = require('./BaseModel');

module.exports = class StudLesson extends BaseModel {
  static modelName = 'studLesson';

  static tableName = 'studLessonss';

  static protectedKeys = ['createdAt', 'updatedAt'];

  static Schema = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  };

  static associate(models) {
    StudLesson.belongsTo(models.student, {
      foreignKey: 'studentId',
    });
    StudLesson.belongsTo(models.lesson, {
      foreignKey: 'lessonId',
      allowNull: false,
      onDelete: 'CASCADE',
    });
  }
};
