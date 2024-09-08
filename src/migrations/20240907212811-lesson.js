/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, { DataTypes }) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('lessons', {
        id: {
          type: DataTypes.UUID,
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
      }, { transaction });

      await queryInterface.createTable('studLessons', {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        studentId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: { tableName: 'students' },
            key: 'id',
          },
          onDelete: 'CASCADE',
        },
        lessonId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: { tableName: 'lessons' },
            key: 'id',
          },
          onDelete: 'CASCADE',
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      }, { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('studLessons', { transaction });
      await queryInterface.dropTable('lessons', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
