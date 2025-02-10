import { registerNewUser, RegisterUser } from "@/services/main/post";
import { TOAST_OPTIONS } from "@/utils/Toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const registerNewUserToServer = createAsyncThunk(
  "auth/registerNewUserToServer",
  async (data: RegisterUser) => {
    const response = await registerNewUser(data);
    if (response.status === 201) {
      toast.success("ثبت نام با موفقیت انجام شد", TOAST_OPTIONS);
    }
  }
);

const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
});

export default slice.reducer;
