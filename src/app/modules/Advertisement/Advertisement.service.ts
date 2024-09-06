import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
import { TAdvertisement } from './Advertisement.interface';
import { Ad_Model } from './Advertisement.model';

const make_ad_intoDB = async (payload: TAdvertisement, file: any) => {
  if (file) {
    const imageName = `${payload.ad_name}-${new Date().getTime()}`;
    const path = file?.path;
    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.ad_img = secure_url as string;
  }

  const result = await Ad_Model.create(payload);
  return result;
};

const get_ad_intoDB = async () => {
  const result = await Ad_Model.find();
  return result;
};

export const ad_service = {
  make_ad_intoDB,
  get_ad_intoDB,
};
