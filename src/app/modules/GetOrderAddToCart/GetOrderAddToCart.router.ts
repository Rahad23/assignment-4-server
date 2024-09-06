import express from 'express';
import { cartBuyProductController } from './GetOrderAddToCart.controller';
import validateRequest from '../../middlewares/validateRequest';
import { addToCartOrderValidationSchema } from './GetOrderAddToCart.validation';

const cartBuyProductRouter = express.Router();

cartBuyProductRouter.post(
  '/',
  validateRequest(addToCartOrderValidationSchema.addToCartOrderValidation),
  cartBuyProductController.cartBuyProduct,
);

export default cartBuyProductRouter;