module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('square', {
      rowid: Sequelize.INTEGER,
      colid: Sequelize.INTEGER,
      value: Sequelize.INTEGER,
      locked: Sequelize.BOOLEAN
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('square');
  }
};
