module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('games', {
      board: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      locked: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false
      },
      sidebar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      {
        timestamps: false,
        createdAt: false,
        updatedAt: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('games');
  }
};
