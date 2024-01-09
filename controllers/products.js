const products = [];
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
    products.push({
      title:req.body.title,
    })
    res.redirect('/');
  }

exports.getProducts = (req, res, next) => {
    console.log(products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop',{
      pageTitle:"Shop Here",
      prods:products,
      path:"/",
      hasProducts:products.length >0,
      prodcutsCSS:true
    })
  }
