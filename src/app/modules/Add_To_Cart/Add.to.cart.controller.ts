import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { addToCartService } from './Add.to.cart.service';

const makeAddToCart = catchAsync(async (req, res) => {
  const result = await addToCartService.makeAddToCartService(req.body);

  if ('status' in result && (result.status === false) === false) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: false,
      message: 'Product add to cart failed!',
      data: result,
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product added to cart successfully',
      data: result,
    });
  }
});

const getAddToCartProduct = catchAsync(async (req, res) => {
  const result = await addToCartService.getAddToCartProductService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Add_To_Cart Products fetched successfully!',
    data: result,
  });
});

const undoAddToCart = catchAsync(async (req, res) => {
  const result = await addToCartService.undoAddToCartService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product undo successfully!',
    data: result,
  });
});

const updateAddToCart = catchAsync(async (req, res) => {
  const result = await addToCartService.updateAddToCartQuantity(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product quantity update successfully!',
    data: result,
  });
});

export const addToCartController = {
  makeAddToCart,
  undoAddToCart,
  getAddToCartProduct,
  updateAddToCart,
};
