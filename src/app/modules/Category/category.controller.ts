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

export const categoryController = {
  createCategory,
  getCategoryData,
};
