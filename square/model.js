const Sequelize = require('sequelize')
const sequelize = require('../db')

const Square = sequelize.define('square', {
    rowid: Sequelize.INTEGER,
    colid: Sequelize.INTEGER,
    value: Sequelize.INTEGER,
    locked: Sequelize.BOOLEAN
  },{
  tableName: 'games',
  timestamps: false
})


module.exports = Square
