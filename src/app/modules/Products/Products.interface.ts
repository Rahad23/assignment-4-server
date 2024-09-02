import { Types } from 'mongoose';

export type TProduct = {
  category: Types.ObjectId;
  name: string;
  productImg?: string;
  price: string;
  ratings?: number;
  description: string;
  isAvailable?: boolean;
};
