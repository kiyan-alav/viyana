import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

function SignUp() {
  return (
    <>
      <div className="max-w-2xl p-5 mx-auto flex flex-col gap-4">
        <div className="">
          <Input
            label="نام"
            labelPlacement="outside"
            placeholder="نام خود را وارد کنید"
            type="text"
            variant="bordered"
            classNames={{
              inputWrapper: "border-slate-800",
            }}
          />
        </div>
        <div className="">
          <Input
            label="نام خانوادگی"
            labelPlacement="outside"
            placeholder="نام خانوادگی خود را وارد کنید"
            type="text"
            variant="bordered"
            classNames={{
              inputWrapper: "border-slate-800",
            }}
          />
        </div>
        <div className="">
          <Input
            label="شماره موبایل"
            labelPlacement="outside"
            placeholder="شماره تماس خود را وارد کنید"
            type="text"
            variant="bordered"
            classNames={{
              inputWrapper: "border-slate-800",
            }}
          />
        </div>
        <div className="">
          <Input
            label="ایمیل"
            labelPlacement="outside"
            placeholder="ایمیل خود را وارد کنید"
            type="email"
            variant="bordered"
            classNames={{
              inputWrapper: "border-slate-800",
            }}
          />
        </div>
        <div className="">
          <Input
            label="رمز عبور"
            labelPlacement="outside"
            placeholder="رمز عبور خود را وارد کنید"
            type="password"
            variant="bordered"
            classNames={{
              inputWrapper: "border-slate-800",
            }}
          />
        </div>
        <div className="">
          <Input
            label="تکرار رمز عبور"
            labelPlacement="outside"
            placeholder="رمز عبور خود را مجدد وارد کنید"
            type="password"
            variant="bordered"
            classNames={{
              inputWrapper: "border-slate-800",
            }}
          />
        </div>
        <Button color="primary" className="w-max mx-auto my-auto">
          ثبت نام
        </Button>
      </div>
    </>
  );
}

export default SignUp;
