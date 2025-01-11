"use client"
import MainLayout from "@/components/layouts/MainLayout";
import {Tab, Tabs} from "@nextui-org/tabs";
import LoginWithEmail from "@/components/templates/LoginWithEmail";
import LoginWithPhone from "@/components/templates/LoginWithPhone";

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
                </Tabs>
            </div>
        </MainLayout>
    );
}

export default Login;