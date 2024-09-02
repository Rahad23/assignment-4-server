import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productService } from './Products.service';

const createProducts = catchAsync(async (req, res) => {
  const result = await productService.createProductIntoDB(req.body, req.file);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product create successfully',
    data: result,
  });
});

const getProductIntoDB = catchAsync(async (req, res) => {
  const result = await productService.getProductIntoDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product data get successfully',
    data: result,
  });
});

const getSingleProductIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await productService.getSingleProductIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product data get successfully',
    data: result,
  });
});

const getHomePageProductsIntoDB = catchAsync(async (req, res) => {
  const result = await productService.getHomePageProductsIntoDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product data get successfully',
    data: result,
  });
});

const updateProductIntoDB = catchAsync(async (req, res) => {
  const result = await productService.editProductIntoDB(
    req.body,
    req.file,
    req.params.id,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product data update successfully',
    data: result,
  });
});

const deleteProductIntoDB = catchAsync(async(req, res)=>{
  const result = await productService.deleteProductIntoDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product data delete successfully',
    data: result,
  });
})

export const productController = {
  createProducts,
  getProductIntoDB,
  getSingleProductIntoDB,
  getHomePageProductsIntoDB,
  updateProductIntoDB,
  deleteProductIntoDB
};
