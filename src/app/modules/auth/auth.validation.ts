import { z } from 'zod';

export const userValidationSchema = z.object({
body: z.object({
    password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' })
    .optional(),

}),
})


const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
});

export const userValidation = {
  userValidationSchema,
  refreshTokenValidationSchema

}