import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { productControllers } from './product.controller';
import {  productValidationSchema } from './product.validation';

const router = express.Router();

router.get('/', productControllers.getAllProduct);
router.post('/create-product',validateRequest(productValidationSchema.createProductValidationSchema), productControllers.createProduct);
router.put('/delete-product/:id', productControllers.deleteProduct);
router.put('/update-product/:id',validateRequest(productValidationSchema.productUpdateValidationSchema), productControllers.updateProduct);

export const productRoutes = router;