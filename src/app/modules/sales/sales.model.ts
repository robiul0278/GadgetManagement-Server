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
    contact_number: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    total_amounts: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    postal_code: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

export const SaleModel = model<TSales>('Sale', productSchema);
