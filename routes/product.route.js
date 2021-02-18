var express= require('express');
var jwt= require('jsonwebtoken');
var productRouter=express.Router();

var ProductController = require('../controllers/product.controller');

productRouter.post('/addProduct',ProductController.addProduct);
productRouter.get('/allProducts',ProductController.getProducts);
productRouter.get('/product/:id',ProductController.getProductById);
productRouter.put('/updateProduct/:id',ProductController.updateProduct);
productRouter.get('/getProductsByChoice',ProductController.getProductsByChoice);
productRouter.get('/getProductsByFilter',ProductController.getProductsByFilter);

module.exports=productRouter;