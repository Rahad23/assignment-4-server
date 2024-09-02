import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { categoryValidation } from './category.validation';
import { categoryController } from './category.controller';

const categoryRouter = express.Router();

categoryRouter.post(
  '/',
  validateRequest(categoryValidation.categoryValidationSchema),
  categoryController.createCategory,
);

categoryRouter.get('/', categoryController.getCategoryData);

export default categoryRouter;
