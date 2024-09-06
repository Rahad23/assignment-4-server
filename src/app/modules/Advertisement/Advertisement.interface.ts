import { Types } from "mongoose";

export type TAdvertisement = {
  title: string;
  ad_name: string;
  ad_img?: string;
  category: Types.ObjectId;
};
