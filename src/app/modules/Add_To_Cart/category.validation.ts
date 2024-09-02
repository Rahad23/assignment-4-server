import { z } from 'zod';

const addToCartValidation = z.object({
  body: z.object({
    productId: z.string({
      required_error: 'Product id required',
      invalid_type_error: 'Product id must be required',
    }),
    category: z.string({
      required_error: 'Category id required!',
      invalid_type_error: 'Category id must be string',
    }),
    quantity: z
      .number({
        invalid_type_error: 'Quantity must be number',
      })
      .optional(),
  }),
});

const addToCartUpdateValidation = z.object({
  body: z.object({
    productId: z
      .string({
        required_error: 'Product id required!',
        invalid_type_error: 'Product id must be string',
      })
      .optional(),
  }),
  category: z
    .string({
      required_error: 'Category id required!',
      invalid_type_error: 'Category id must be string',
    })
    .optional(),
  quantity: z
    .number({
      invalid_type_error: 'Quantity must be number',
    })
    .optional(),
});

export const addToCartValidationSchema = {
  addToCartUpdateValidation,
  addToCartValidation,
};
