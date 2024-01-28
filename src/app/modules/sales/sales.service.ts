import { TSales } from "./sales.interface";
import { SaleModel } from "./sales.model";

const getSaleProductFromDB = async () => {
    const result = await SaleModel.find();
    return result;
  };
  
  const createSaleIntoDB = async (userData: TSales) => {
    const result = await SaleModel.create(userData);
  
    return result;
  };


  export const saleProductServices = {
    getSaleProductFromDB,
    createSaleIntoDB,
  }