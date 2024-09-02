import { model, Schema } from 'mongoose';
import { TOrder } from './GetOrder.interface';

const orderSchema = new Schema<TOrder>(
  {
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'products',
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'category',
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const Order = model<TOrder>('orders', orderSchema);
