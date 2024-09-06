import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TProduct } from './Products.interface';
import { Product } from './Products.model';
import { Category } from '../Category/category.model';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
import QueryBuilder from '../../builder/QueryBuilder';
import {
  ICategory,
  productSearchableFields,
  TUpdateProduct,
} from './Products.contance';

const createProductIntoDB = async (payload: TProduct, file: any) => {
  const categoryId = payload?.category;

  if (categoryId) {
    const category = await Category.findById({
      _id: categoryId,
    }).exec();

    if (!category) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Category not found');
    }

    if (file) {
      const imageName = `${payload.name}-${new Date().getTime()}`;
      const path = file?.path;
      //send image to cloudinary
      const { secure_url } = await sendImageToCloudinary(imageName, path);
      payload.productImg = secure_url as string;
    }

    const result = await Product.create(payload);

    return result;
  }
};

const getHomePageProductsIntoDB = async (query: Record<string, unknown>) => {
  try {
    const productQuery = new QueryBuilder(
      Product.find().populate('category', {
        _id: 1,
        name: 1,
        stock: 1,
      }),
      query,
    )
      .search(productSearchableFields)
      .filter()
      .sort()
      .paginate(100)
      .fields();
    const result = await productQuery.modelQuery;
    const meta = await productQuery.countTotal(12);

    return {
      result,
      meta,
    };
  } catch (error) {
    console.log(error);
  }
};

const getProductIntoDB = async (query: Record<string, unknown>) => {
  // Extracting the value inside quotes
  if (query.searchTerm) {
    const productQuery = new QueryBuilder(
      Product.find().populate('category', { _id: 1, name: 1 }),
      query,
    )
      .search(productSearchableFields)
      .filter()
      .sort()
      .paginate(100)
      .fields();
    const result = await productQuery.modelQuery;
    const meta = await productQuery.countTotal(12);

    return {
      result,
      meta,
    };
  }
  if (typeof query.searchCategory === 'string') {
    const sortData = JSON.parse(query.searchCategory);
    // Extract price range values
    const startPrice = parseFloat(sortData.priceRange.split('-')[0]);
    const endPrice = parseFloat(sortData.priceRange.split('-')[1]);

    // Fetch products and populate category
    const productFilter = await Product.find().populate('category', {
      _id: 1,
      name: 1,
    });

    // Filter products by category and price range
    const filteredProducts = productFilter.filter((product) => {
      const productPrice = parseFloat(product.price);

      const productCategory = product?.category as unknown as ICategory;
      return (
        (!sortData.category || productCategory?.name === sortData.category) &&
        (!sortData.priceRange ||
          (productPrice >= startPrice && productPrice <= endPrice))
      );
    });

    // Sort products by price based on priceSorting order
    const sortedProducts = filteredProducts.sort((a, b) => {
      const aPrice = parseFloat(a.price);
      const bPrice = parseFloat(b.price);

      if (sortData.priceSorting === '-1') {
        return bPrice - aPrice; // Descending order (high to low)
      } else {
        return aPrice - bPrice; // Ascending order (low to high)
      }
    });

    return {
      result: sortedProducts,
      meta: '',
    };
  }
};

const getSingleProductIntoDB = async (id: string) => {
  const result = await Product.findById(id)
    .populate('category', {
      _id: 1,
      name: 1,
      stock: 1,
    })
    .select('-createdAt -updatedAt');
  return result;
};

const editProductIntoDB = async (
  payload: TUpdateProduct,
  file: any,
  id: string,
) => {
  if (file) {
    const imageName = `${payload.name}-${new Date().getTime()}`;
    const path = file?.path;
    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.productImg = secure_url as string;
  }

  const result = await Product.findByIdAndUpdate({ _id: id }, payload);
  return result;
};

const deleteProductIntoDB = async (id: string) => {
  const result = await Product.findByIdAndDelete({ _id: id });
  return result;
};

export const productService = {
  createProductIntoDB,
  getProductIntoDB,
  getSingleProductIntoDB,
  getHomePageProductsIntoDB,
  editProductIntoDB,
  deleteProductIntoDB,
};
