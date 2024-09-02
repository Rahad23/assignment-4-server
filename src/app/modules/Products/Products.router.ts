import express, { NextFunction, Request, Response } from 'express';
import { productController } from './Products.controller';
import validateRequest from '../../middlewares/validateRequest';
import { productsValidationSchema } from './Products.validation';
import { upload } from '../../utils/sendImageToCloudinary';

const productRouter = express.Router();

productRouter.post(
  '/',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(productsValidationSchema.ProductValidationSchema),
  productController.createProducts,
);

productRouter.get('/', productController.getProductIntoDB);

productRouter.get('/home-product', productController.getHomePageProductsIntoDB);

productRouter.get('/:id', productController.getSingleProductIntoDB);

productRouter.patch(
  '/:id',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(productsValidationSchema.updateProductValidationSchema),
  productController.updateProductIntoDB,
);

productRouter.delete('/:id', productController.deleteProductIntoDB);

export default productRouter;
