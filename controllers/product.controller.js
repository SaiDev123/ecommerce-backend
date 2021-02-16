
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

exports.getProducts=function(request,response){

ProductModel.find({},(err,docs) => {
    if(err){
        response.send({status:false,message:err.message});
        return;
    }
    if(docs){
      response.send(docs);
    }
})

}

exports.getProductById=function(request,response){

    var pid=request.params.id;

    ProductModel.findOne({pid:pid},(err,doc) => {
        if(err){
            response.send(err.message);
        }
        else
        {
        response.send(doc);
        }
    })
}

exports.updateProduct=function(request,response){
    var pid=request.params.id;
    var updatedProduct=request.body;

    ProductModel.updateOne({pid:pid},updatedProduct,(err,res) => {
        if(err){
            response.send(err.message);
        }
        if(res){
            response.send(res);
        }
    })
}