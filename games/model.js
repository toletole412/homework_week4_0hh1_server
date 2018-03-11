const Sequelize = require('sequelize')
const sequelize = require('../db')

const Games = sequelize.define('games', {
    board: {
      type: Sequelize.STRING,
      allowNull: false
    },
    locked: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sidebar: {
      type: Sequelize.JSON,
      allowNull: true
    }
  },{
  tableName: 'games',
  timestamps: false
})


module.exports = Games
