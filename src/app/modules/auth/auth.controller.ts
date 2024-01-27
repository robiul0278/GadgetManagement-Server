import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { authServices } from "./auth.service";
import sendResponse from "../../utils/sendResponse";
import config from "../../config";

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
    const result = await authServices.login(req.body);

    const {refreshToken, accessToken, user} = result;
    res.cookie('refreshToken', refreshToken, {
      secure: config.node_env === 'production',
      httpOnly: true
    })
  
    // const {password, ...others} = user.toObject()
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User login successful",
      data: {
        user:user,
        accessToken
      },
    });
  });


  const refreshToken = catchAsync(async (req, res) => {
    const { refreshToken } = req.cookies;
    const result = await authServices.refreshToken(refreshToken);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Access token is retrieved successfully!',
      data: result,
    });
  });


  export const authControllers = {
    register,
    login,
    refreshToken,
}