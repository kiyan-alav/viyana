import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

function DetailsAccount() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-palette-50">
        جزئیات حساب
      </h2>
      <Form className="grid grid-cols-2 gap-4" validationBehavior="native">
        <Input
          isRequired
          errorMessage="نام الزامی است"
          label="نام"
          labelPlacement="outside"
          name="oldPassword"
          type="text"
          className="col-span-2 md:col-span-1"
        />
        <Input
          isRequired
          errorMessage="نام خانوادگی الزامی است"
          label="نام خانوادگی"
          labelPlacement="outside"
          name="oldPassword"
          type="text"
          className="col-span-2 md:col-span-1"
        />
        <Input
          isRequired
          errorMessage="شماره موبایل الزامی است"
          label="موبایل"
          labelPlacement="outside"
          name="oldPassword"
          type="text"
          className="col-span-2 md:col-span-1"
        />
        <Input
          isRequired
          errorMessage="ایمیل الزامی است"
          label="ایمیل"
          labelPlacement="outside"
          name="oldPassword"
          type="email"
          className="col-span-2 md:col-span-1"
        />
        <Button
          type="submit"
          className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md bg-palette-50 text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow h-13 mt-8 w-max"
        >
          ذخیره
        </Button>
      </Form>
    </div>
  );
}

export default DetailsAccount;
