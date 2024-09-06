import catchAsync from '../../utils/catchAsync';
import { categoryService } from './category.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createCategory = catchAsync(async (req, res) => {
  const result = await categoryService.createCategoryInToDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category is created successfully',
    data: result,
  });
});

const getCategoryData = catchAsync(async (req, res) => {
  const result = await categoryService.getCategoryInToDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category data get successfully',
    data: result,
  });
});

const getCategoryBaseProductData = catchAsync(async (req, res) => {
  const result = await categoryService.getCategoryBaseProduct(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product get successfully',
    data: result,
  });
});
const getOneCategory = catchAsync(async (req, res) => {
  const result = await categoryService.getSingleCategoryIntoDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product get successfully',
    data: result,
  });
});
const updateCategory = catchAsync(async (req, res) => {
  const result = await categoryService.updateSingleCategoryIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product get successfully',
    data: result,
  });
});
const deleteCategory = catchAsync(async (req, res) => {
  const result = await categoryService.deleteCategoryIntoDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category successfully',
    data: result,
  });
});

export const categoryController = {
  createCategory,
  getCategoryData,
  getCategoryBaseProductData,
  getOneCategory,
  updateCategory,
  deleteCategory,
};
