import { Category } from '../Category/category.model';
import { TOrder } from './GetOrder.interface';
import { Order } from './GetOrder.model';

const orderMakeIntoDB = async (payload: TOrder) => {
  try {
    const findCategory = await Category.findById({ _id: payload.category });

    if (findCategory?.stock === 0) {
      return {
        stock: findCategory?.stock,
        message: 'Order failed!',
      };
    }

    await Category.findOneAndUpdate(
      { _id: payload.category },
      { $inc: { stock: -payload?.quantity } },
      { new: true },
    );

    const result = await Order.create(payload);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const orderMakeService = { orderMakeIntoDB };
