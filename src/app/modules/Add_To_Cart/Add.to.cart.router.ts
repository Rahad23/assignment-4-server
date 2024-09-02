import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { addToCartValidationSchema } from './category.validation';
import { addToCartController } from './Add.to.cart.controller';

const addToCartRouter = express.Router();

addToCartRouter.post(
  '/',
  validateRequest(addToCartValidationSchema.addToCartValidation),
  addToCartController.makeAddToCart,
);

addToCartRouter.delete('/:id', addToCartController.undoAddToCart);
addToCartRouter.get('/', addToCartController.getAddToCartProduct);
addToCartRouter.patch('/', addToCartController.updateAddToCart);

export default addToCartRouter;
