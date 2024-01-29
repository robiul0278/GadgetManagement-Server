/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFilters } from '../../utils/g.types';
import { TProduct } from './product.interface';
import { ProductModel } from './product.model';



const getAllProductFromDB = async (searchQuery: string | undefined, filters: TFilters | undefined): Promise<TProduct[]> => {
  let query: any = {};

  if (searchQuery) {
    const regex = new RegExp(searchQuery, 'i');
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

  if (filters) {
    if (filters.priceRange) {
      query.price = { $gte: filters.priceRange.min, $lte: filters.priceRange.max };
    }
    if (filters.releaseDate) {
      query.release_date = { $gte: new Date(filters.releaseDate.min), $lte: new Date(filters.releaseDate.max) };
    }
    if (filters.brand) {
      query.brand = filters.brand;
    }
    if (filters.modelNumber) {
      query.model_number = filters.modelNumber;
    }
    if (filters.category) {
      query.category = filters.category;
    }
    if (filters.operatingSystem) {
      query.operating_system = filters.operatingSystem;
    }
    if (filters.connectivity) {
      query.connectivity = filters.connectivity;
    }
    if (filters.powerSource) {
      query.power_source = filters.powerSource;
    }
    if (filters.features) {
      const featureRegex = new RegExp(filters.features, 'i');
      query.features = featureRegex;
    }
  }

  const result: TProduct[] = await ProductModel.find(query);
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
  // console.log(result)
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
