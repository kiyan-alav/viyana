"use client";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { FormEvent, useState } from "react";
import { Form } from "@heroui/react";
import { useAppDispatch } from "@/redux/hooks";
import { registerNewUserToServer } from "@/redux/slice/AuthSlice";
import { MAIN_PATH } from "@/routes/path";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const registerHandler = async function (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await dispatch(
      registerNewUserToServer({
        firstName,
        lastName,
        mobile,
        email,
        password,
      })
    ).unwrap();

    if (response.status === 201) {
      setFirstName("");
      setLastName("");
      setMobile("");
      setEmail("");
      setPassword("");
      setRePassword("");
      router.replace(MAIN_PATH.authEmail);
    }
  };

  return (
    <>
      <Form
        className="max-w-2xl p-5 mx-auto flex flex-col gap-4"
        validationBehavior="native"
        onSubmit={registerHandler}
      >
        <div className="w-full">
          <Input
            isRequired
            errorMessage="لطفا نام خود را وارد کنید"
            label="نام"
            labelPlacement="outside"
            placeholder="نام خود را وارد کنید"
            type="text"
            variant="bordered"
            classNames={{
              inputWrapper: "border-slate-800",
            }}
            value={firstName}
            onValueChange={setFirstName}
          />
        </div>
        <div className="w-full">
          <Input
            isRequired
            errorMessage="لطفا نام خانوادگی خود را وارد کنید"
            label="نام خانوادگی"
            labelPlacement="outside"
            placeholder="نام خانوادگی خود را وارد کنید"
            type="text"
            variant="bordered"
            classNames={{
              inputWrapper: "border-slate-800",
            }}
            value={lastName}
            onValueChange={setLastName}
          />
        </div>
        <div className="w-full">
          <Input
            isRequired
            errorMessage="لطفا شماره موبایل خود را وارد کنید"
            label="شماره موبایل"
            labelPlacement="outside"
            placeholder="شماره تماس خود را وارد کنید"
            type="text"
            variant="bordered"
            classNames={{
              inputWrapper: "border-slate-800",
            }}
            value={mobile}
            onValueChange={setMobile}
          />
        </div>
        <div className="w-full">
          <Input
            isRequired
            errorMessage="لطفا ایمیل خود را وارد کنید"
            label="ایمیل"
            labelPlacement="outside"
            placeholder="ایمیل خود را وارد کنید"
            type="email"
            variant="bordered"
            classNames={{
              inputWrapper: "border-slate-800",
            }}
            value={email}
            onValueChange={setEmail}
          />
        </div>
        <div className="w-full">
          <Input
            isRequired
            errorMessage="لطفا رمز عبور خود را وارد کنید"
            label="رمز عبور"
            labelPlacement="outside"
            placeholder="رمز عبور خود را وارد کنید"
            type="password"
            variant="bordered"
            classNames={{
              inputWrapper: "border-slate-800",
            }}
            value={password}
            onValueChange={setPassword}
          />
        </div>
        <div className="w-full">
          <Input
            isRequired
            label="تکرار رمز عبور"
            labelPlacement="outside"
            placeholder="رمز عبور خود را مجدد وارد کنید"
            type="password"
            variant="bordered"
            classNames={{
              inputWrapper: "border-slate-800",
            }}
            value={rePassword}
            onValueChange={setRePassword}
            validate={(value) => {
              if (value.length === 0) {
                return "لطفا رمز عبور خود را وارد کنید";
              }
              if (value !== password) {
                return "رمز عبور مطابقت ندارد";
              }
            }}
          />
        </div>
        <Button color="primary" className="w-max mx-auto my-auto" type="submit">
          ثبت نام
        </Button>
      </Form>
    </>
  );
}

export default SignUp;
