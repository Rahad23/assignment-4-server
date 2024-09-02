import { z } from 'zod';

const categoryValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be string',
    }),
    stock: z.number({ invalid_type_error: 'Stock must be number' }).optional(),
  }),
});

const updateCategoryValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be string',
      })
      .optional(),
    stock: z.number({ invalid_type_error: 'Stock must be number' }).optional(),
  }),
});

export const categoryValidation = {
  categoryValidationSchema,
  updateCategoryValidationSchema,
};
