import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { cartBuyProductService } from "./GetOrderAddToCart.service";

const cartBuyProduct = catchAsync(async(req, res)=>{
    const result = await cartBuyProductService.cartBuyProductIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'order submitted successfully',
        data: result,
      });

})


export const cartBuyProductController = {cartBuyProduct}