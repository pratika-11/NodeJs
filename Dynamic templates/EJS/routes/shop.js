const express=require("express");
const router=express.Router();
const path =require("path")
const rootDir=require("../util/path");
const adminData=require("./admin")

router.get("/",(req,res,next)=>{
  console.log("in shop.js",adminData.products)
  const products=adminData.products;
  // res.sendFile(path.join(rootDir,"views","shop.html"))
  res.render("shop",{prods:products,pageTitle:'Shop',path:"/"})
})
    
module.exports=router