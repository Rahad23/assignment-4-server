import { Types } from 'mongoose';

export type TAddToCart = {
  productId: Types.ObjectId;
  category: Types.ObjectId;
  quantity: number;
  price: string;
};
