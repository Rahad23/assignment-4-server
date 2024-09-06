import express, { NextFunction, Request, Response } from 'express';
import { ad_controller } from './Advertisement.controller';
import { upload } from '../../utils/sendImageToCloudinary';
import validateRequest from '../../middlewares/validateRequest';
import { ad_data_validation } from './Advertisement.validation';

const ad_router = express.Router();

ad_router.post(
  '/',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(ad_data_validation.adValidationSchema),
  ad_controller.make_ad,
);

ad_router.get('/', ad_controller.get_ad);

export default ad_router;
