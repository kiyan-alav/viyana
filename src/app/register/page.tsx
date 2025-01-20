"use client"
import MainLayout from "@/components/layouts/MainLayout";
import {Tab, Tabs} from "@heroui/tabs";
import LoginWithEmail from "@/components/templates/LoginWithEmail";
import LoginWithPhone from "@/components/templates/LoginWithPhone";
import Register from "@/components/templates/Register";

function Login() {
    return (
        <MainLayout>
            <div className="flex w-full flex-col">
                <Tabs radius="full" color="primary" variant="light" defaultSelectedKey>
                    <Tab key="email" title="ورود با ایمیل">
                        <LoginWithEmail />
                    </Tab>
                    <Tab key="phone" title="ورود با رمز یکبار مصرف">
                        <LoginWithPhone />
                    </Tab>
                    <Tab key="register" title="ثبت نام">
                        <Register />
                    </Tab>
                </Tabs>
            </div>
        </MainLayout>
    );
}

export default Login;