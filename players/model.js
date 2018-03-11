const Sequelize = require('sequelize')
const sequelize = require('../db')

const Players = sequelize.define('players', {
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },{
  tableName: 'games',
  timestamps: false
})


module.exports = Players
