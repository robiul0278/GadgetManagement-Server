import express, { NextFunction, Request, Response } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { productControllers } from './product.controller';
import {  productValidationSchema } from './product.validation';
import { upload } from '../../utils/sendImagetoCloudinary';

const router = express.Router();

router.get('/', productControllers.getAllProduct);

router.post('/create-product',
upload.single('file'),
(req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
},
validateRequest(productValidationSchema.createProductValidationSchema), 
productControllers.createProduct);

router.put('/delete-product/:id', productControllers.deleteProduct);
router.put('/bulk-delete', productControllers.bulkDelete);
router.get('/single-product/:id', productControllers.singleProduct);
router.put('/update-product/:id',validateRequest(productValidationSchema.productUpdateValidationSchema), productControllers.updateProduct);

export const productRoutes = router;