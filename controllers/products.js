const models = require('../models')
const getAllProductsByManufacturer = async (request, response) => {
  const result = await models.Products.findAll({

    include: [{ model: models.Manufacturers }]
  })

  return result
    ? response.send(result)
    : response.sendStatus(404)
}
const getProductWithManufacturereById = async (request, response) => {
  const { id } = request.params
  const result = await models.Products.findOne({
    where: { id },
    include: [{ model: models.Manufacturers }]
  })
  return result
    ? response.send(result)
    : response.sendStatus(404)
}

module.exports = { getAllProductsByManufacturer, getProductWithManufacturereById }