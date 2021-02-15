var express= require('express');
var jwt= require('jsonwebtoken');
var productRouter=express.Router();

var ProductController = require('../controllers/product.controller');

productRouter.post('/addProduct',ProductController.addProduct);

module.exports=productRouter;