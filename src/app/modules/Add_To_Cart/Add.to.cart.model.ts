import { model, Schema } from 'mongoose';
import { TAddToCart } from './Add.to.cart.interface';
import { Product } from '../Products/Products.model';

const addToCartSchema = new Schema<TAddToCart>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'products',
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'category',
    },
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: String,
      default: '0',
    },
  },
  {
    timestamps: true,
  },
);

addToCartSchema.pre('save', async function (next) {
  const productExist = await Product.findById({
    _id: this.productId,
  });

  if (!productExist) {
    throw new Error('Product not exists !');
  }
  this.price = productExist.price;
  next();
});


export const AddToCart = model<TAddToCart>('addToCart', addToCartSchema);
