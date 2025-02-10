"use client";
import MainLayout from "@/components/layouts/MainLayout";
import { Tab, Tabs } from "@heroui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { MAIN_PATH } from "@/routes/path";

function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <MainLayout>
      <div className="flex w-full flex-col">
        <Tabs
          radius="full"
          color="primary"
          variant="light"
          defaultSelectedKey="email"
          selectedKey={pathname}
          onSelectionChange={(key) => router.push(key as string)}
        >
          <Tab key={MAIN_PATH.authEmail} title="ورود با ایمیل"></Tab>
          <Tab
            key={MAIN_PATH.authOtp}
            title="ورود با رمز یکبار مصرف"
            isDisabled
          ></Tab>
          <Tab key={MAIN_PATH.authRegister} title="ثبت نام"></Tab>
        </Tabs>
      </div>
      <div className="mt-4">{children}</div>
    </MainLayout>
  );
}

export default RegisterLayout;
