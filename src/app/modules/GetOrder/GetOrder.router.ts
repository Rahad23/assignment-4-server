import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { orderValidationSchema } from './GetOrder.validation';
import { orderController } from './GetOrder.controller';

const orderRouter = express.Router();

orderRouter.post(
  '/',
  validateRequest(orderValidationSchema.orderValidation),
  orderController.orderMake,
);

export default orderRouter;
