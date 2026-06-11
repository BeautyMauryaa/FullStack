const express=require("express");
const router=express.Router();

const {getproduct,addproduct} = require('../controller/product.controller.js');
router.get("/",getproduct);
router.post("/",addproduct);
module.exports =router;