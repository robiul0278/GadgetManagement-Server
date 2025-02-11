import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productServices } from './product.service';
import AppError from '../../errors/AppError';
// import { TFilters } from '../../utils/g.types';

const getAllProduct = catchAsync(async (req, res) => {
  const { search } = req.query;
  const filters = req.query; // Retrieve all query parameters as filters

  const result = await productServices.getAllProductFromDB(
    search as string,
    filters,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Product Retrieved successfully',
    data: result,
  });
});

const createProduct = catchAsync(async (req, res) => {
  // console.log(req.file);
  const productData = req.body;

  const result = await productServices.createProductIntoDB(req.file, productData);

  // console.log(result)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Product Created successfully',
    data: result,
  });
});

const singleProduct = catchAsync(async (req, res) => {
  const id = req.params.id;

  const product = await productServices.findProductById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is delete successfully',
    data: product,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const id = req.params.id;

  const product = await productServices.findProductById(id);

  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  }

  const result = await productServices.deleteProductFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is delete successfully',
    data: result,
  });
});

const bulkDelete = catchAsync(async (req, res) => {
  const ids = req.body.ids;

  const result = await productServices.deleteBulkProductsFromDB(ids);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is delete successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  // console.log(req.body)
  const product = await productServices.findProductById(id);

  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  }
  const result = await productServices.updateProductFromDB( id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update Product successfully',
    data: result,
  });
});

export const productControllers = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProduct,
  bulkDelete,
  singleProduct,
};
