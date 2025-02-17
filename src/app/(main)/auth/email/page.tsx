"use client";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { FormEvent, useState } from "react";
import { Form } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { MAIN_PATH } from "@/routes/path";
import { loginUserToServer } from "@/redux/slice/AuthSlice";

function LoginWithEmail() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async function (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await dispatch(
      loginUserToServer({
        email,
        password,
      })
    ).unwrap();

    if (response.status === 201) {
      setEmail("");
      setPassword("");
      router.replace(MAIN_PATH.home);
    }
  };

  return (
    <>
      <Form
        className="max-w-2xl p-5 mx-auto flex flex-col gap-4"
        validationBehavior="native"
        onSubmit={loginHandler}
      >
        <div className="w-full">
          <Input
            isRequired
            label="ایمیل"
            labelPlacement="outside"
            errorMessage="لطفا ایمیل خود را وارد کنید"
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
            label="رمز عبور"
            errorMessage="لطفا رمز عبور خود را وارد کنید"
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
        <Button color="primary" className="w-max mx-auto my-auto" type="submit">
          ورود
        </Button>
      </Form>
    </>
  );
}

export default LoginWithEmail;
