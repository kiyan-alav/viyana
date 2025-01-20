import {Input} from "@heroui/input";
import {Button} from "@heroui/button";
import {InputOtp} from "@heroui/input-otp";

function LoginWithPhone() {
    return (
        <>
            <div className="max-w-2xl p-5 mx-auto flex flex-col gap-4">
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
                <div className="mx-auto" style={{
                    direction: "ltr"
                }}>
                    <InputOtp length={4} size="lg" />
                </div>
                <Button color="primary" className="w-max mx-auto my-auto">ورود</Button>
            </div>
        </>
    );
}

export default LoginWithPhone;