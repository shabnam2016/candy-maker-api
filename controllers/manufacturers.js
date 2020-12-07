const models = require('../models')

const GetAllManufacturersProducts = async (request, response) => {
  const result = await models.Manufacturers.findAll({
    include: [{ model: models.Products }]
  })

  return result
    ? response.send(result)
    : response.sendStatus(404)
}
const GetManufacturerByIdWithProducts = async (request, response) => {
  const { id } = request.params

  const result = await models.Manufacturers.findOne({
    where: { id },
    include: [{ model: models.Products }]
  })

  return result
    ? response.send(result)
    : response.sendStatus(404)
}



module.exports = { GetAllManufacturersProducts, GetManufacturerByIdWithProducts }
