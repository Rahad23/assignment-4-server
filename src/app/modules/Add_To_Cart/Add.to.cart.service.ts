import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Category } from '../Category/category.model';
import { TAddToCart } from './Add.to.cart.interface';
import { AddToCart } from './Add.to.cart.model';
import { quantityIncreaseDecrease } from './Add.to.cart.contance';

const makeAddToCartService = async (data: TAddToCart) => {
  const productExistInCart = await AddToCart.exists({
    productId: data.productId,
  });

  if (productExistInCart) {
    return {
      status: false,
      message: 'Product already added in cart!',
    };
  }

  const findCategory = await Category.exists({ _id: data.category });

  if (!findCategory) {
    return {
      status: false,
      message: 'Sorry this product not add in to cart',
    };
  }

  const result = await AddToCart.create(data);
  return result;
};

const getAddToCartProductService = async () => {
  try {
    const result = await AddToCart.find()
      .populate('productId', {
        productImg: 1,
        name: 1,
        price: 1,
      })
      .populate('category', { name: 1, stock: 1 });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const undoAddToCartService = async (params: string) => {
  try {
    const result = await AddToCart.findOneAndDelete({
      productId: params,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateAddToCartQuantity = async (payload: {
  action: string;
  id: string;
  quantity: number;
}) => {
  const findCartProduct = await AddToCart.findById({
    _id: payload.id,
  }).populate('productId');

  if (!findCartProduct) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Add to cart data not found!');
  }

  const calculatePrice =
    quantityIncreaseDecrease.INCREASE === payload.action
      ? Number(findCartProduct.price) +
        Number(findCartProduct?.productId?.price)
      : Number(findCartProduct.price) -
        Number(findCartProduct?.productId?.price);

  const quantityWithPrice = {
    quantity: payload.quantity,
    price: `${calculatePrice}`,
  };

  const result = await AddToCart.findByIdAndUpdate(
    { _id: payload.id },
    quantityWithPrice,
  );

  return result;

  // const result = await AddToCart.findByIdAndUpdate({ _id: payload.id });
};

export const addToCartService = {
  makeAddToCartService,
  undoAddToCartService,
  getAddToCartProductService,
  updateAddToCartQuantity,
};
