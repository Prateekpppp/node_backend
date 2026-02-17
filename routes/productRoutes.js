import express from 'express';import { createProduct, getAllProducts, getSingleProduct } from '../controller/productController.js';

const router = express.Router();

// Routes

router.route('/products')
    .get(getAllProducts)
    .post(createProduct);
router.route('/product').get(getSingleProduct);


export default router;