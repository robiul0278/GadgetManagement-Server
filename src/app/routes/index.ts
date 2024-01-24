import { Router } from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { productRoutes } from '../modules/product/product.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: authRoutes,
  },
  {
    path: '/products',
    route: productRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
