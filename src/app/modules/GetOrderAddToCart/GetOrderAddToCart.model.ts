import { model, Schema } from 'mongoose';
import { TCartOrder } from './GetOrderAddToCart.interface';

const orderSchema = new Schema<TCartOrder>(
  {
    product: [
      {
        id: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'products',
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    category: [
      {
        id: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'category',
        },
      },
    ],
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
  },
  {
    timestamps: true,
  },
);

export const cartOrder = model<TCartOrder>('cart-order', orderSchema);
