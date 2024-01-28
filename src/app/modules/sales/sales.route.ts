import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { salesValidationSchema } from './sales.validation';
import { saleProductControllers } from './sales.controller';

const router = express.Router();

router.get('/', saleProductControllers.getSaleProduct);
router.post('/create-sales',validateRequest(salesValidationSchema.productValidation), saleProductControllers.createSaleProduct);


export const salesRoutes = router;