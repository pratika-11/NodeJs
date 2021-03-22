const express=require("express");
const path=require("path");
const rootDir=require("../util/path")
const router=express.Router();
const products=[]


// /admin/add-product => GET
router.get("/add-product",(req,res,next)=>{
       res.render('add-product',{pageTitle:"Add Product",path:'/admin/add-product'})
//res.sendFile(path.join(rootDir,"views","add-product.html"))
})

// /admin/product =>POST
router.post("/product",(req,res,next)=>{
       console.log(req.body);
       products.push({title:req.body.title})
       res.redirect("/") 
})


module.exports.routes=router;
module.exports.products=products;