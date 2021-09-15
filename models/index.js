const Sequelize = require('sequelize')
const dailyData = require('./dailyData')

const connection = new Sequelize('compostteadata', 'teamaster', 'Compo5t3@', {
  host: 'localhost', dialect: 'mysql'
})

const daily = dailyData(connection, Sequelize)

module.exports = { daily }

