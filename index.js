const express = require('express')
const { GetAllManufacturersProducts, GetManufacturerByIdWithProducts } = require('./controllers/manufacturers.js')
const { getAllProductsByManufacturer, getProductWithManufacturereById } = require('./controllers/products.js')

const app = express()

app.get('/manufacturers', GetAllManufacturersProducts)
app.get('/manufacturers/:id', GetManufacturerByIdWithProducts)
app.get('/products', getAllProductsByManufacturer)
app.get('/products/:id', getProductWithManufacturereById)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
