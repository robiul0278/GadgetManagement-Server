import config from "../../config";
import { TLogin, TRegister } from "./auth.interface";
import { AuthModel } from "./auth.model";
import { createToken, verifyToken } from "./auth.utils";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";


const register = async (userData: TRegister) => {
    const result = await AuthModel.create(userData)
  
    return result
  };




  const login = async (payload: TLogin) => {
    //if the user exists
  
    const user = await AuthModel.isUserExistByEmail(payload.email)
  
    if (!user) {
      throw new Error('Invalid credentials')
    }
  
    if (!(await AuthModel.isPasswordMatched(payload?.password, user?.password)))
      throw new Error('Password do not matched!')
  
    // create access token
    const jwtPayload = {
      role: user?.role,
      email: user?.email,
    }

    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expire_in as string,
    );
    const refreshToken = createToken(
      jwtPayload,
      config.jwt_refresh_secret as string,
      config.jwt_refresh_expires_in as string,
    );

  
    return {
      user,
      accessToken, 
      refreshToken
    }
  }



  const refreshToken = async (token: string) => {
    // checking if the given token is valid
    const decoded = verifyToken(token, config.jwt_refresh_secret as string);
  
    const { email } = decoded;
  
    // checking if the user is exist
    const user = await AuthModel.isUserExistByEmail(email);
  
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }
    // checking if the user is already deleted
    const isDeleted = user?.isDeleted;
  
    if (isDeleted) {
      throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
    }
  
    // checking if the user is blocked
    const userStatus = user?.status;
  
    if (userStatus === 'block') {
      throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
    }
  
 
  
    const jwtPayload = {
      email: user.email,
      role: user.role,
    };
  
    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expire_in as string,
    );
  
    return {
      accessToken,
    };
  };


  export const authServices = {
    register,
    login,
    refreshToken,
  }