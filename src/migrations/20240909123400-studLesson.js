const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('studLessons', {
      studentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: { tableName: 'students' },
          key: 'id',
        },
      },
      lessonId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: { tableName: 'lessons' },
          key: 'id',
        },
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },

    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('studLessons');
  },
};
