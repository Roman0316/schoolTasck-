const BaseModel = require('./BaseModel');

module.exports = class StudLesson extends BaseModel {
  static modelName = 'studLesson';

  static tableName = 'studLessons';

  static protectedKeys = ['createdAt', 'updatedAt'];

  static Schema = { };

  static associate(models) {
    StudLesson.belongsTo(models.student, {
      foreignKey: 'studentId',
      allowNull: false,
      onDelete: 'CASCADE',
    });
    StudLesson.belongsTo(models.lesson, {
      foreignKey: 'lessonId',
      allowNull: false,
      onDelete: 'CASCADE',
    });
  }
};
