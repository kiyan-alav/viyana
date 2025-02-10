import axiosInstance from "@/utils/axios";
import { REGISTER_USER } from "../endPoints";

export type RegisterUser = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  password: string;
};

export const registerNewUser = async function (data: RegisterUser) {
  return await axiosInstance.post(REGISTER_USER, JSON.stringify(data));
};
