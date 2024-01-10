const Product = require('../models/product')
exports.getAddProduct  = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product',{
      pageTitle:"Add Product",
      addActive:true,
      path:"/admin/add-product",
      formCSS:true
    })
  } 

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save();
    res.redirect('/');
  }

exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = Product.fetchAll()
    res.render('shop',{
      pageTitle:"Shop Here",
      prods:products,
      path:"/",
      hasProducts:products.length >0,
      prodcutsCSS:true
    })
  }
