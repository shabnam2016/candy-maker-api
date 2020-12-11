const models = require('../models')

const GetAllManufacturersProducts = async (request, response) => {
  const result = await models.Manufacturers.findAll({
    include: [{ model: models.Products }]
  })

  return result
    ? response.send(result)
    : response.sendStatus(404)
}
const GetManufacturerByNameWithProducts = async (request, response) => {
  try {
    const { name } = request.params

    const result = await models.Manufacturers.findOne({
      where: {
        name: { [models.Op.like]: `%${name}%` },
      },
      include: [{ model: models.Products }]
    })

    return result
      ? response.send(result)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve hero, please try again')
  }
}



module.exports = { GetAllManufacturersProducts, GetManufacturerByNameWithProducts }
