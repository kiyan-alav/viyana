import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
// import { TOAST_OPTIONS } from "./toast";
// import { toast } from "react-toastify";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3002/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error: AxiosError) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    console.error("Request failed:", error);
    const errorMessage =
      (error.response && error.response.data) || error.message;

    // if (error.response.status === 404) {
    //   toast.error("مشکلی رخ داده است", TOAST_OPTIONS);
    // } else if (error.response.status === 400) {
    //   toast.error("مشکلی رخ داده است", TOAST_OPTIONS);
    //   return Promise.reject(errorMessage);
    // } else if (error.response.status === 401) {
    //   toast.error("خطا در عملیات احراز هویت", TOAST_OPTIONS);
    //   localStorage.clear();
    //   window.location.reload();
    // } else {
    //   // TODO create 500
    //   toast.error("خطا در برقراری ارتباط با سرور", TOAST_OPTIONS);
    //   // window.location.href = "/500";
    // }

    return Promise.reject(errorMessage);
  }
);

export default axiosInstance;
