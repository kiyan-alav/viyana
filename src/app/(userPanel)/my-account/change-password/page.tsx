"use client";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useState } from "react";
import { Icon } from "@iconify/react";

function ChangePassword() {
  const [isVisibleOldPassword, setIsVisibleOldPassword] = useState(false);
  const [isVisibleNewPassword, setIsVisibleNewPassword] = useState(false);

  const oldPasswordToggleVisibility = () =>
    setIsVisibleOldPassword((prev) => !prev);
  const newPasswordToggleVisibility = () =>
    setIsVisibleNewPassword((prev) => !prev);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-palette-50">
        تغییر رمز عبور
      </h2>
      <Form className="w-full max-w-lg" validationBehavior="native">
        <Input
          isRequired
          errorMessage="رمز عبور قدیمی الزامی است"
          label="رمز عبور قدیمی"
          labelPlacement="outside"
          name="oldPassword"
          type={isVisibleOldPassword ? "text" : "password"}
          endContent={
            <button
              className="focus:outline-none text-palette-600"
              type="button"
              onClick={oldPasswordToggleVisibility}
            >
              {isVisibleOldPassword ? (
                <Icon icon="mdi:eye-off" width="24" height="24" />
              ) : (
                <Icon icon="mdi:eye" width="24" height="24" />
              )}
            </button>
          }
        />
        <Input
          isRequired
          errorMessage="رمز عبور جدید"
          label="رمز عبور جدید"
          labelPlacement="outside"
          name="newPassword"
          type={isVisibleNewPassword ? "text" : "password"}
          endContent={
            <button
              className="focus:outline-none text-palette-600"
              type="button"
              onClick={newPasswordToggleVisibility}
            >
              {isVisibleNewPassword ? (
                <Icon icon="mdi:eye-off" width="24" height="24" />
              ) : (
                <Icon icon="mdi:eye" width="24" height="24" />
              )}
            </button>
          }
        />
        <Button
          type="submit"
          className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md bg-palette-50 text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow h-13 mt-8"
        >
          تغییر رمز عبور
        </Button>
      </Form>
    </div>
  );
}

export default ChangePassword;
