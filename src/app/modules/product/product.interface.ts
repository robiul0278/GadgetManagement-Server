import { Types } from "mongoose";


export interface TProduct {
    name: string;
    price:number;
    quantity: number;
    isDeleted: false;
    release_date: string;
    brand: string;
    model_number: string;
    category: string;
    operating_system: string;
    connectivity: string;
    power_source: string;
    features: string; 
    image?: string;
    user: Types.ObjectId;
  };