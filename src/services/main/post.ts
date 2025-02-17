import axiosInstance from "@/utils/axios";
import { LOGIN_USER, REGISTER_USER } from "../endPoints";

export type RegisterUser = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  password: string;
};

export type LoginUser = {
  email: string;
  password: string;
};

export const registerNewUser = async function (data: RegisterUser) {
  return await axiosInstance.post(REGISTER_USER, JSON.stringify(data));
};

export const loginUser = async function (data: LoginUser) {
  return await axiosInstance.post(LOGIN_USER, JSON.stringify(data));
};
