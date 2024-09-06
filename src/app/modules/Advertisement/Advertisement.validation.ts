import { z } from 'zod';

const adValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be string',
    }),
    ad_name: z.string({
      required_error: 'Ad name is required',
      invalid_type_error: 'Ad name must be string',
    }),
    category: z.string({
      required_error: 'Category id is required',
      invalid_type_error: 'Category id must be string',
    }),
  }),
});

const adUpdateValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be string',
    }),
    ad_name: z.string({
      required_error: 'Ad name is required',
      invalid_type_error: 'Ad name must be string',
    }),
    category: z.string({
      required_error: 'Category id is required',
      invalid_type_error: 'Category id must be string',
    }),
  }),
});

export const ad_data_validation = {
  adUpdateValidationSchema,
  adValidationSchema,
};
