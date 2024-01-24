
/* eslint-disable no-unused-vars */
import { Model, Document } from "mongoose";
import { USER_ROLE } from "./auth.constant";


export interface TRegister extends Document {
    // _id: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
    status: 'block' | 'in-progress';
    isDeleted: boolean;
  }

export type TLogin = {
    email: string;
  password: string;
}

export interface UserModel extends Model<TRegister> {
  isUserExistByEmail(email: string): Promise<TRegister>;
  isPasswordMatched(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;