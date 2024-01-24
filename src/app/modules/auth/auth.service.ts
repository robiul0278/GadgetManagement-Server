import config from "../../config";
import { TLogin, TRegister } from "./auth.interface";
import { AuthModel } from "./auth.model";
import jwt from 'jsonwebtoken';


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
      _id: user?._id,
      role: user?.role,
      email: user?.email,
    }
  
    const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
      expiresIn: config.jwt_access_expire,
    })
  
    return {
      user,
      token, 
    }
  }



  export const authServices = {
    register,
    login
  }