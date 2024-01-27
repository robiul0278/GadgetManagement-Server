import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();

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
