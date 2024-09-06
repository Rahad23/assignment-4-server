import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ad_service } from './Advertisement.service';

const make_ad = catchAsync(async (req, res) => {
  const result = await ad_service.make_ad_intoDB(req.body, req.file);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Advertise create successfully!',
    data: result,
  });
});

const get_ad = catchAsync(async (req, res) => {
  const result = await ad_service.get_ad_intoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Advertise data fetch successfully!',
    data: result,
  });
});

export const ad_controller = {
  make_ad,
  get_ad,
};
