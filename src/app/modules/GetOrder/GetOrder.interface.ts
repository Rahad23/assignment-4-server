import { Types } from 'mongoose';

export type TOrder = {
  product: Types.ObjectId;
  category: Types.ObjectId;
  name: string;
  quantity?: number;
  price: number;
  phoneNumber: string;
  email: string;
  deliveryAddress: string;
};
