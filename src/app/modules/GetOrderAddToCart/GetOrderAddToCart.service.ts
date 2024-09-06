import { TCartOrder } from './GetOrderAddToCart.interface';
import { cartOrder } from './GetOrderAddToCart.model';

const cartBuyProductIntoDB = async (payload: TCartOrder) => {
  const result = await cartOrder.create(payload);

  return result;
};

export const cartBuyProductService = { cartBuyProductIntoDB };
