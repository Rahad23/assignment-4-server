import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryInToDB = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

const getCategoryInToDB = async () => {
  const result = await Category.find().select('-createdAt -updatedAt');
  return result;
};

export const categoryService = {
  createCategoryInToDB,
  getCategoryInToDB,
};
