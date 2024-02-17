import { Types } from "mongoose";

export interface TSales {
    name: string;
    contact_number:number;
    email: string;
    total_amounts:number;
    quantity:number;
    address: string;
    postal_code: number;
    date: string;
    user: Types.ObjectId;
  };