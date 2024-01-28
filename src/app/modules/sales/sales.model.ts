import { Schema, model } from 'mongoose';
import { TSales } from './sales.interface';

const productSchema = new Schema<TSales>(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const SaleModel = model<TSales>('Sale', productSchema);
