const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData =  require('./admin')

const products = adminData.products

router.get('/', (req, res, next) => {
  console.log(products)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop',{
    pageTitle:"Shop Here",
    prods:products,
    path:"/",
    hasProducts:products.length >0,
    prodcutsCSS:true
  })
});

module.exports = router;
