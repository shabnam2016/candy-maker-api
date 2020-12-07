const Sequelize = require('sequelize')
const ManufacturersModel = require('./manufacturers')
const ProductsModel = require('./products')


const connection = new Sequelize('candies', 'candies', 'C4nd13$!', {
  host: 'localhost', dialect: 'mysql'
})

const Manufacturers = ManufacturersModel(connection, Sequelize)
const Products = ProductsModel(connection, Sequelize, Manufacturers)

Manufacturers.hasMany(Products)
Products.belongsTo(Manufacturers)


module.exports = {
  Manufacturers,
  Products,
}
