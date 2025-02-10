"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useDisclosure } from "@heroui/react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import AdminBannerItem from "@/components/templates/AdminBannerItem";

function AdminManageBanners() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [bannerImgFile, setBannerImgFile] = useState<string | File | null>(
    null
  );
  const [bannerImgDisplay, setBannerImgDisplay] = useState<
    string | File | null
  >(null);

  const onFileSelectCategoryImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImgFile(file);
        setBannerImgDisplay(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={onOpen}
        className="self-start text-[13px] md:text-sm leading-4 flex items-center gap-2 font-semibold justify-center border-2 border-blue-600 px-4 py-2 rounded text-blue-600 hover:text-white hover:bg-blue-600 transition-colors"
      >
        <Icon icon="mingcute:add-fill" width="20" height="20" />
        اضافه کردن بنر جدید
      </button>
      <div className="flex flex-col gap-8 mt-8">
        <div className="flex flex-col gap-8">
          <h2 className="border-b-3 border-b-palette-50 pb-2 text-lg font-semibold text-palette-50">
            بنر مربع
          </h2>
          <div className="flex flex-wrap gap-8">
            <AdminBannerItem />
            <AdminBannerItem />
            <AdminBannerItem />
            <AdminBannerItem />
            <AdminBannerItem />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="border-b-3 border-b-palette-50 pb-2 text-lg font-semibold text-palette-50">
            بنر مستطیل
          </h2>
          <div className="flex flex-wrap gap-8">
            <AdminBannerItem />
            <AdminBannerItem />
            <AdminBannerItem />
            <AdminBannerItem />
            <AdminBannerItem />
            <AdminBannerItem />
            <AdminBannerItem />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ویرایش یا افزودن دسته بندی
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <Input label="لینک بنر" type="text" />
                <div className="">
                  {!bannerImgFile && (
                    <label
                      className="bg-white rounded-lg p-5 pt-6 border border-solid cursor-pointer flex flex-col items-center"
                      htmlFor="cateogory"
                    >
                      <span className="text-lg">
                        <Icon
                          icon="mdi:image-add-outline"
                          width="36"
                          height="36"
                        />
                      </span>
                      <span className="text-medium text-palette-50 mt-2">
                        برای بارگذاری{" "}
                        <span className="text-palette-50">کلیک</span> نمایید
                      </span>
                    </label>
                  )}
                  {bannerImgFile && (
                    <div className="border border-solid rounded-lg w-36 h-24">
                      <img
                        src={bannerImgDisplay as string}
                        alt="cateogory"
                        className="w-full h-full"
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    id="cateogory"
                    className="hidden"
                    onChange={onFileSelectCategoryImage}
                  />
                  <div className="mt-2">
                    {bannerImgFile && (
                      <label
                        className="flex items-center gap-1 text-sm text-palette-50 cursor-pointer"
                        htmlFor="cateogory"
                      >
                        جایگزینی بنر
                        <Icon
                          icon="material-symbols:replace-image-outline"
                          width="36"
                          height="36"
                        />
                      </label>
                    )}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="success"
                  onPress={onClose}
                  className="text-white"
                >
                  ثبت
                </Button>
                <Button color="danger" onPress={onClose}>
                  بستن
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AdminManageBanners;
