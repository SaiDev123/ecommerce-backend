
var ProductModel= require('../models/product.model');

exports.addProduct=function(request,response){

    var product= request.body;

    var newProduct=new ProductModel(product);

    newProduct.save(function(err,doc){
        if(err){
            response.send({status:false,message:err.message})
        }
        if(doc._id){
            response.send({status:true,message:"product added successfully"});
        }
    })
}