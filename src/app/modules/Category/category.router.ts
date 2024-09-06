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
categoryRouter.get('/:id', categoryController.getCategoryBaseProductData);
categoryRouter.get('/category/:id', categoryController.getOneCategory);
categoryRouter.patch('/', validateRequest(categoryValidation.updateCategoryValidationSchema),categoryController.updateCategory);

categoryRouter.delete('/:id', categoryController.deleteCategory);

export default categoryRouter;
