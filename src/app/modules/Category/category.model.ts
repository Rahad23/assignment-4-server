import { model, Schema } from 'mongoose';
import { TCategory } from './category.interface';

const categorySchema = new Schema<TCategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    stock: {
      type: Number, 
      required: true,
      default: 0
    }
  },
  {
    timestamps: true,
  },
);

export const Category = model<TCategory>('category', categorySchema);
