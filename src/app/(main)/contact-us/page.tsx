"use client";
import MainLayout from "@/components/layouts/MainLayout";
import { Icon } from "@iconify/react";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import dynamic from "next/dynamic";

const ContactUsMap = dynamic(
  () => import("@/components/modules/ContactUsMap"),
  {
    ssr: false,
  }
);

function ContactUs() {
  return (
    <MainLayout>
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-2xl md:text-lg font-bold text-palette-50 pb-7 md:pb-10 lg:pb-6 -mt-1">
            ما را اینجا پیدا کنید
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="">
                <Icon
                  icon="mdi:location"
                  width="24"
                  height="24"
                  className="text-palette-100"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-palette-50">آدرس</h4>
                <p className="text-sm mt-0">فلام فلان</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <Icon
                  icon="ic:baseline-email"
                  width="24"
                  height="24"
                  className="text-palette-100"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-palette-50">ایمیل</h4>
                <p className="text-sm mt-0">example@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <Icon
                  icon="ic:round-phone"
                  width="24"
                  height="24"
                  className="text-palette-100"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-palette-50">تلفن</h4>
                <p className="ltrClass text-sm mt-0">+98 915 111 1111</p>
              </div>
            </div>
            <div className="">
              <ContactUsMap />
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-2xl md:text-3xl font-bold text-palette-50 pb-7 md:pb-10 lg:pb-6 -mt-1">
            در تماس باشید
          </h3>
          <Form
            className="w-full grid grid-cols-2 gap-4"
            validationBehavior="native"
          >
            <Input
              isRequired
              errorMessage="لطفا نام خود را وارد کنید"
              label="نام"
              labelPlacement="outside"
              name="fName"
              placeholder="لطفا نام خود را وارد کنید"
              type="text"
              className="col-span-2 md:col-span-1 font-semibold"
            />
            <Input
              isRequired
              errorMessage="لطفا ایمیل خود را وارد کنید"
              label="ایمیل"
              labelPlacement="outside"
              name="email"
              placeholder="لطفا ایمیل خود را وارد کنید"
              type="email"
              className="col-span-2 md:col-span-1 font-semibold"
            />
            <Input
              label="موضوع"
              labelPlacement="outside"
              name="subject"
              placeholder="لطفا موضوع خود را وارد کنید"
              type="text"
              className="col-span-2 font-semibold"
            />
            <Textarea
              className="col-span-2 font-semibold h-full"
              classNames={{
                inputWrapper: "h-max",
              }}
              labelPlacement="outside"
              label="پیام"
              placeholder="پیام خود را بنویسید"
            />
            <Button
              type="submit"
              variant="solid"
              className="bg-palette-50 text-white w-1/4 py-4 px-8 font-bold"
            >
              ارسال پیام
            </Button>
          </Form>
        </div>
      </div>
    </MainLayout>
  );
}

export default ContactUs;
