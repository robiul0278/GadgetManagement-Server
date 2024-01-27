import { z } from 'zod';

// Define a model for dimensions

export const createProductValidationSchema = z.object({
body: z.object({
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    brand: z.string(),
    model_number: z.string(),
    category: z.string(),
    operating_system: z.string(),
    connectivity: z.string(),
    power_source: z.string(),
    features: z.string(),
}),
})

export const productUpdateValidationSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        price: z.number().optional(),
        quantity: z.number().optional(),
        brand: z.string().optional(),
        model_number: z.string().optional(),
        category: z.string().optional(),
        operating_system: z.string().optional(),
        connectivity: z.string().optional(),
        power_source: z.string().optional(),
        features: z.string().optional(),
    }),
    })

export const productValidationSchema = {
    createProductValidationSchema,
    productUpdateValidationSchema
}