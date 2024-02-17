import { z } from 'zod';

// Define a model for dimensions

export const productValidation = z.object({
body: z.object({
    name: z.string(),
    date: z.string().optional(),
    contact_number: z.number(),
    email: z.string(),
    address: z.string(),
    total_amounts: z.number(),
    quantity: z.number(),
    postal_code: z.number(),
    user: z.string(),
}),
})


export const salesValidationSchema = {
    productValidation,
}