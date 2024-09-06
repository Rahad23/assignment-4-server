import { Types } from 'mongoose';

export type TCartOrder = {
  product: [
    {
      id: Types.ObjectId;
      quantity: number;
    },
  ];
  category: [
    {
      id: Types.ObjectId;
    },
  ];
  name: string;
  price: number;
  phoneNumber: string;
  email: string;
  deliveryAddress: string;
};
