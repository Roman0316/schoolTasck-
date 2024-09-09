const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('refLessons', {
      refererId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: { tableName: 'referers' },
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
    await queryInterface.dropTable('refLessons');
  },
};
