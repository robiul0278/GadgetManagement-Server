import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { saleProductServices } from "./sales.service";

  
const getSaleProduct = catchAsync(async (req, res) => {
  // const { filter } = req.query;
  // const { filter } = req.query;
  // const { filter } = req.query;
  const result = await saleProductServices.getSaleProductFromDB();

  // if (filter) {
  //     const currentDate = new Date();
  //     switch (filter) {
  //         case 'Weekly':
  //             result = result.filter(item => {
  //                 const itemDate = new Date(item.date);
  //                 return itemDate >= new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  //             });
  //             break;
  //         case 'Daily':
  //             result = result.filter(item => {
  //                 const itemDate = new Date(item.date);
  //                 return itemDate.toDateString() === currentDate.toDateString();
  //             });
  //             break;
  //         case 'Monthly':
  //             result = result.filter(item => {
  //                 const itemDate = new Date(item.date);
  //                 return itemDate.getMonth() === currentDate.getMonth() && itemDate.getFullYear() === currentDate.getFullYear();
  //             });
  //             break;
  //         case 'Yearly':
  //             result = result.filter(item => {
  //                 const itemDate = new Date(item.date);
  //                 return itemDate.getFullYear() === currentDate.getFullYear();
  //             });
  //             break;
  //         default:
  //             break;
  //     }
  // }

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
  