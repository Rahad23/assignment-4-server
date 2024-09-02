import { z } from 'zod';

const orderValidation = z.object({
  body: z.object({
    product: z.string({
      required_error: 'Product id is required',
      invalid_type_error: 'Product id must be a string',
    }),
    category: z.string({
      required_error: 'Category id is required',
      invalid_type_error: 'Category id must be a string',
    }),
    name: z.string({
      required_error: 'Name is Required!',
      invalid_type_error: 'Name must be a string',
    }),
    deliveryAddress: z.string({
      required_error: 'Delivery address is required',
      invalid_type_error: 'Delivery address must be string!',
    }),
    price: z.number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number!',
    }),
    phoneNumber: z.string({
      required_error: 'Phone number is required',
      invalid_type_error: 'Phone number must be a string',
    }),
    email: z.string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    }),
  }),
});

const orderUpdateValidation = z.object({
  body: z.object({
    productId: z
      .string({
        required_error: 'Product id is required',
        invalid_type_error: 'Product id must be a string',
      })
      .optional(),
    category: z
      .string({
        required_error: 'Category id is required',
        invalid_type_error: 'Category id must be a string',
      })
      .optional(),
    name: z
      .string({
        required_error: 'Name is Required!',
        invalid_type_error: 'Name must be a string',
      })
      .optional(),
    deliveryAddress: z
      .string({
        required_error: 'Delivery address is required',
        invalid_type_error: 'Delivery address must be string!',
      })
      .optional(),
    price: z
      .number({
        required_error: 'Price is required',
        invalid_type_error: 'Price must be a number!',
      })
      .optional(),
    phoneNumber: z
      .number({
        required_error: 'Phone number is required',
        invalid_type_error: 'Phone number must be a number',
      })
      .optional(),
    email: z
      .string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
      })
      .optional(),
  }),
});

export const orderValidationSchema = { orderUpdateValidation, orderValidation };
