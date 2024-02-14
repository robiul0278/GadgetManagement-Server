import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'
import config from '../../config'
import { TRegister, UserModel, } from './auth.interface'

const userSchema = new Schema<TRegister, UserModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['user', 'manager'],
      default: 'user'
    },
    status: {
      type: String,
      enum: ['block', 'in-progress'],
      default: 'in-progress',
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
  },
  {
    timestamps: true,
  },
)


// Method to entered # password
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  )
  next()
})

userSchema.statics.isUserExistByEmail = async function (email) {
  return await AuthModel.findOne({ email }).select('+password')
}

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword)
}

export const AuthModel = model<TRegister, UserModel>('User', userSchema)