/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

// const getAllProductFromD = async () => {
//   const result = await ProductModel.find();
//   return result;
// };

const getAllProductFromDB = async (searchQuery: any) => {
  let query = {};

  if (searchQuery) {
    // Create a regular expression to perform a case-insensitive search
    const regex = new RegExp(searchQuery, 'i');

    // Define the search criteria for each field
    query = {
      $or: [
        { name: regex },
        { brand: regex },
        { model_number: regex },
        { category: regex },
        { operating_system: regex },
        { connectivity: regex },
        { power_source: regex },
        { features: regex },
      ],
    };
  }

  const result = await ProductModel.find(query);
  return result;
};


const createProductIntoDB = async (userData: TProduct) => {
  const result = await ProductModel.create(userData);

  return result;
};

const deleteProductFromDB = async (id: string) => {
  return await ProductModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
};
const deleteBulkProductsFromDB = async (ids: string[]) => {
  return await ProductModel.updateMany({ _id: { $in: ids } }, { isDeleted: true });
};

const findProductById = async (id: string) => {
  return await ProductModel.findById(id);
};

const updateProductFromDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await ProductModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const productServices = {
  createProductIntoDB,
  deleteProductFromDB,
  findProductById,
  updateProductFromDB,
  getAllProductFromDB,
  deleteBulkProductsFromDB
};
