import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { authControllers } from './auth.controller';
import { userValidation } from './auth.validation';

const router = express.Router();

// Create a new category
router.post(
  '/register',
  validateRequest(userValidation.userValidationSchema),
  authControllers.register,
);
router.post('/login', authControllers.login);
router.post(
  '/refresh-token',
  validateRequest(userValidation.refreshTokenValidationSchema),
  authControllers.refreshToken,
);

export const authRoutes = router;
