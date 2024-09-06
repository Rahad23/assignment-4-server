import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Product } from '../Products/Products.model';
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

const getCategoryBaseProduct = async (id: string) => {
  const findCategoryName = await Category.findById({ _id: id });

  if (!findCategoryName) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Category not available!');
  }

  const result = await Product.find({
    category: id,
  }).populate('category');

  return { category: findCategoryName.name, result };
};

const getSingleCategoryIntoDB = async (id: string) => {

  const products = await Product.find({
    category: id,
  }).populate('category');

  const category = await Category.findById({ _id: id }).select(
    '-createdAt -updatedAt -__v',
  );

  if (!category) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Category data not available!');
  }

  const result = {
    category,
    products: products?.length
  }

  return result;
};

const updateSingleCategoryIntoDB = async (payload) => {
  const category = await Category.findByIdAndUpdate(
    { _id: payload.id },
    { name: payload?.name, stock: payload?.stock },
  );

  return category;
};

const deleteCategoryIntoDB = async (id: string) => {
  const category = await Category.findByIdAndDelete({ _id: id });

  return category;
};

export const categoryService = {
  createCategoryInToDB,
  getCategoryInToDB,
  getCategoryBaseProduct,
  getSingleCategoryIntoDB,
  updateSingleCategoryIntoDB,
  deleteCategoryIntoDB,
};
