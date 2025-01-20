"use client"
import {Input} from "@heroui/input";
import {Button} from "@heroui/button";

function LoginWithEmail() {
    return (
        <>
            <div className="max-w-2xl p-5 mx-auto flex flex-col gap-4">
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
                <Button color="primary" className="w-max mx-auto my-auto">ورود</Button>
            </div>
        </>
    );
}

export default LoginWithEmail;