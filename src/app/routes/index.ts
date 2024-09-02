import { Router } from 'express';
import categoryRouter from '../modules/Category/category.router';
import productRouter from '../modules/Products/Products.router';
import addToCartRouter from '../modules/Add_To_Cart/Add.to.cart.router';
import orderRouter from '../modules/GetOrder/GetOrder.router';

const router = Router();

const moduleRoutes = [
  {
    path: '/category',
    route: categoryRouter,
  },
  {
    path: '/products',
    route: productRouter,
  },
  {
    path: '/add-to-cart',
    route: addToCartRouter,
  },
  {
    path: '/orders',
    route: orderRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
