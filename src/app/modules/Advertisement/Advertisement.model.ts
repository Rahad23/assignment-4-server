import { model, Schema } from 'mongoose';
import { TAdvertisement } from './Advertisement.interface';

const ad_schema = new Schema<TAdvertisement>(
  {
    title: {
      type: String,
      required: true,
    },
    ad_name: {
      type: String,
      required: true,
      unique: true,
    },
    ad_img: {
      type: String,
      default: 'img',
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Ad_Model = model<TAdvertisement>('ad_banner', ad_schema);
