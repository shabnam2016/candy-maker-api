const models = require('../models')
const getAllProductsByManufacturer = async (request, response) => {
  const result = await models.Products.findAll({

    include: [{ model: models.Manufacturers }]
  })

  return result
    ? response.send(result)
    : response.sendStatus(404)
}
const getProductWithManufacturerByName = async (request, response) => {
  const { name } = request.params
  const result = await models.Products.findOne({
    where: {
      name: { [models.Op.like]: `%${name}%` },
    },
    include: [{ model: models.Manufacturers }]
  })
  return result
    ? response.send(result)
    : response.sendStatus(404)
}

module.exports = { getAllProductsByManufacturer, getProductWithManufacturerByName }