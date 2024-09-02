import { model, Schema } from 'mongoose';
import { TProduct } from './Products.interface';

const productsSchema = new Schema<TProduct>(
  {
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'category',
    },
    name: {
      type: String,
      required: true,
    },
    productImg: {
      type: String,
      default: 'img',
    },
    price: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      default: 5,
    },
    description: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('products', productsSchema);
