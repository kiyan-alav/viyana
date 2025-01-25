"use client";
import MainLayout from "@/components/layouts/MainLayout";
import { Tab, Tabs } from "@heroui/tabs";
import LoginWithEmail from "@/components/templates/LoginWithEmail";
import LoginWithPhone from "@/components/templates/LoginWithPhone";
import SignUp from "@/components/templates/SignUp";

function Register() {
  return (
    <MainLayout>
      <div className="flex w-full flex-col">
        <Tabs
          radius="full"
          color="primary"
          variant="light"
          defaultSelectedKey="email"
        >
          <Tab key="email" title="ورود با ایمیل">
            <LoginWithEmail />
          </Tab>
          <Tab key="phone" title="ورود با رمز یکبار مصرف">
            <LoginWithPhone />
          </Tab>
          <Tab key="register" title="ثبت نام">
            <SignUp />
          </Tab>
        </Tabs>
      </div>
    </MainLayout>
  );
}

export default Register;
