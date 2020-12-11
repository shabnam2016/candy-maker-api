const products = (connection, Sequelize, Manufacturers) => {
  return connection.define('products', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    yearIntroduced: { type: Sequelize.DATE },
    manufacturerId: { type: Sequelize.INTEGER, references: { model: Manufacturers, key: 'id' } },
  }, {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = products
