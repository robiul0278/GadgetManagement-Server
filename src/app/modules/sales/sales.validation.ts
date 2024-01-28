import { z } from 'zod';

// Define a model for dimensions

export const productValidation = z.object({
body: z.object({
    name: z.string(),
    date: z.string().optional(),
    quantity: z.number(),

}),
})


export const salesValidationSchema = {
    productValidation,
}