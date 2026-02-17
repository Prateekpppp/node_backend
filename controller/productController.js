import Product from "../models/productModel.js";

// Create Product

export const createProduct = async (req,res)=>{
    console.log(req.body);
    
    // await Product.create(req.body);
}

export const getAllProducts = (rq,res)=>{
    res.status(200).json({
        messsage:"Data to show"
    })
}

export const getSingleProduct = (rq,res)=>{
    res.status(200).json({
        messsage:"Data for single"
    })
}