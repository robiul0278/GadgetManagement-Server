import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { authServices } from "./auth.service";
import sendResponse from "../../utils/sendResponse";

/*
import { Request, Response } from 'express';
import * as fooServices from './foo.service';
*/
const register = catchAsync(async (req, res) => {
    const result = await authServices.register(req.body)

    // const {password, ...others} = result.toObject()
  
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      "message": "User registered successfully",
      data: result,
    });
  });


  const login = catchAsync(async (req, res) => {
    const {user, token} = await authServices.login(req.body);
  
    // const {password, ...others} = user.toObject()
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User login successful",
      data: {
        user:user,
        token
      },
    });
  });


  export const authControllers = {
    register,
    login,
}