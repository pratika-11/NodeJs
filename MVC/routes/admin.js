const express=require("express");
const productController=require("../controllers/products")
const router=express.Router();



// /admin/add-product => GET
router.get("/add-product",productController.getAddProducts)

// /admin/product =>POST
router.post("/product",productController.postProduct)


module.exports=router;
