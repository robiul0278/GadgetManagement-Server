import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { saleProductServices } from "./sales.service";

const getSaleProduct = catchAsync(async (req, res) => {
    const result = await saleProductServices.getSaleProductFromDB();
  
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'Product Retrieved successfully',
      data: result,
    });
  });
  
  const createSaleProduct = catchAsync(async (req, res) => {
    const result = await saleProductServices.createSaleIntoDB(req.body);
  
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'Sales Created successfully',
      data: result,
    });
  });
  

  export const saleProductControllers = {
    getSaleProduct,
    createSaleProduct,
  };
  