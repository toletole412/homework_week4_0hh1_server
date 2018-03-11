const Sequelize = require('sequelize')
const sequelize = require('../db')

const Games = sequelize.define('games', {
    id: {
      type: Sequelize
    }
    board: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: false
    },
    locked: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: false
    },
    sidebar: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },{
  tableName: 'games',
  timestamps: false
})


module.exports = Games
