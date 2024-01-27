import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    // release_date: {
    //   type: Date,
    // },
    brand: {
      type: String,
      required: true,
    },
    model_number: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    operating_system: {
      type: String,
      required: true,
    },
    connectivity: {
      type: String,
      required: true,
    },
    power_source: {
      type: String,
      required: true,
    },
    features: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ProductModel = model<TProduct>('Product', productSchema);
