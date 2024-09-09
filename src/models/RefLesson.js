const BaseModel = require('./BaseModel');

module.exports = class RefLesson extends BaseModel {
  static modelName = 'refLesson';

  static tableName = 'refLessons';

  static protectedKeys = ['createdAt', 'updatedAt'];

  static Schema = { };

  static associate(models) {
    RefLesson.belongsTo(models.referer, {
      foreignKey: 'refererId',
      allowNull: false,
      onDelete: 'CASCADE',
    });
    RefLesson.belongsTo(models.lesson, {
      foreignKey: 'lessonId',
      allowNull: false,
      onDelete: 'CASCADE',
    });
  }
};
