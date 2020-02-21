 const express = require('express');
const app= express();

const productRoutes = require('./api/route/product')
const productRoutes = require('./api/route/order')

app.use ('/product', productRoutes);
app.use ('/order' ,orderRoutes);
module.exports =app;