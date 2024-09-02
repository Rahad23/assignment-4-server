import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { orderMakeService } from './GetOrder.service';

const orderMake = catchAsync(async (req, res) => {
  const result = await orderMakeService.orderMakeIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product data get successfully',
    data: result,
  });
});

export const orderController = { orderMake };
