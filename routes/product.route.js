var express= require('express');
var jwt= require('jsonwebtoken');
var productRouter=express.Router();

var ProductController = require('../controllers/product.controller');
// add middleware -> verify the token

var AuthMiddleware= require('../middlewares/auth.middleware');

productRouter.post('/addProduct',AuthMiddleware.authMiddleware,ProductController.addProduct);
productRouter.get('/allProducts',ProductController.getProducts);
productRouter.get('/product/:id',ProductController.getProductById);
productRouter.put('/updateProduct/:id',AuthMiddleware.authMiddleware,ProductController.updateProduct);
productRouter.get('/getProductsByChoice',ProductController.getProductsByChoice);
productRouter.get('/getProductsByFilter',ProductController.getProductsByFilter);

module.exports=productRouter;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjlkM2M2ZDgzMGM2MmNmYmRmNmQ4YSIsImlhdCI6MTYxMzYxNDc5MH0.o2oTN4dWsfaEqXwP6hkgmXdkrFTRivYgxDZ3dl4_mWQ