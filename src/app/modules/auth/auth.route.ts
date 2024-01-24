import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import userValidationSchema from './auth.validation';
import { authControllers } from './auth.controller';

const router = express.Router();

// Create a new category
router.post('/register',validateRequest(userValidationSchema), authControllers.register);
router.post('/login', authControllers.login );

export const authRoutes = router;