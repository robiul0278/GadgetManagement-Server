import { Router } from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { productRoutes } from '../modules/product/product.route';
import { salesRoutes } from '../modules/sales/sales.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/products',
    route: productRoutes,
  },
  {
    path: '/sales',
    route: salesRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
