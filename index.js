const express = require('express')
const { GetAllManufacturersProducts, GetManufacturerByNameWithProducts } = require('./controllers/manufacturers.js')
const { getAllProductsByManufacturer, getProductWithManufacturerByName } = require('./controllers/products.js')

const app = express()

app.get('/manufacturers', GetAllManufacturersProducts)
app.get('/manufacturers/:name', GetManufacturerByNameWithProducts)
app.get('/products', getAllProductsByManufacturer)
app.get('/products/:name', getProductWithManufacturerByName)


app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
