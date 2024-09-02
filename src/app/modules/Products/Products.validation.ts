import { z } from 'zod';

const ProductValidationSchema = z.object({
  body: z.object({
    category: z.string({
      required_error: 'Id is required',
      invalid_type_error: 'Id must be a string',
    }),
    name: z.string({
      required_error: 'Name is Required!',
      invalid_type_error: 'Name must be a string',
    }),
    description: z.string({
      required_error: 'Description is required',
      invalid_type_error: 'Description must be string!',
    }),
    price: z.string({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a string!',
    }),
    ratings: z
      .number({ invalid_type_error: 'ratings must be a string!' })
      .optional(),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    categoryId: z
      .string({
        required_error: 'Id is required',
        invalid_type_error: 'Id must be a string',
      })
      .optional(),
    name: z
      .string({
        required_error: 'Name is Required!',
        invalid_type_error: 'Name must be a string',
      })
      .optional(),
    description: z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be string!',
      })
      .optional(),
    price: z
      .string({
        required_error: 'Price is required',
        invalid_type_error: 'Price must be a string!',
      })
      .optional(),
    ratings: z
      .number({ invalid_type_error: 'ratings must be a string!' })
      .optional(),
  }),
});

export const productsValidationSchema = {
  ProductValidationSchema,
  updateProductValidationSchema,
};
