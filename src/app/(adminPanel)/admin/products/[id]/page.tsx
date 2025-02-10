"use client";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/react";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "@/utils/Toast";

const categories = [
  { key: "1", label: "دسته بندی 1" },
  { key: "2", label: "دسته بندی 2" },
  { key: "3", label: "دسته بندی 3" },
  { key: "4", label: "دسته بمدی 4" },
];

function EditProduct() {
  const [productImgFiles, setProductImgFiles] = useState<File[]>([]);
  const [productImgDisplays, setProductImgDisplays] = useState<string[]>([]);

  const onFileSelectProductImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && productImgFiles.length < 3) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImgFiles((prev) => [...prev, file]);
        setProductImgDisplays((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("مجاز بع آپلود بیش از 3 عکس نمی باشید", TOAST_OPTIONS);
    }
  };

  const replaceImage = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImgFiles((prev) => {
          const newFiles = [...prev];
          newFiles[index] = file;
          return newFiles;
        });
        setProductImgDisplays((prev) => {
          const newDisplays = [...prev];
          newDisplays[index] = reader.result as string;
          return newDisplays;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    setProductImgFiles((prev) => prev.filter((_, i) => i !== index));
    setProductImgDisplays((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-palette-50">
        ویرایش محصول
      </h2>
      <div className="flex flex-col gap-4 mt-4">
        <div className="grid grid-cols-4 gap-4">
          <Input
            isRequired
            label="عنوان محصول"
            labelPlacement="outside"
            type="text"
            className="col-span-1 font-semibold"
            classNames={{
              inputWrapper:
                "bg-white data-[hover=true]:bg-white group-data-[focus=true]:bg-white",
            }}
          />
          <Input
            isRequired
            label="قیمت"
            labelPlacement="outside"
            type="text"
            className="col-span-1 font-semibold"
            classNames={{
              inputWrapper:
                "bg-white data-[hover=true]:bg-white group-data-[focus=true]:bg-white",
            }}
          />
          <Select
            isRequired
            className="max-w-xs"
            label="دسته بندی"
            labelPlacement="outside"
            classNames={{
              trigger:
                "bg-white data-[hover=true]:bg-white group-data-[focus=true]:bg-white",
            }}
          >
            {categories.map((category) => (
              <SelectItem key={category.key}>{category.label}</SelectItem>
            ))}
          </Select>
          <Input
            isRequired
            label="تعداد موجودی"
            labelPlacement="outside"
            type="number"
            className="col-span-1 font-semibold"
            classNames={{
              inputWrapper:
                "bg-white data-[hover=true]:bg-white group-data-[focus=true]:bg-white",
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Textarea
            className="col-span-1 font-semibold h-full"
            classNames={{
              inputWrapper:
                "h-max bg-white data-[hover=true]:bg-white group-data-[focus=true]:bg-white",
            }}
            isRequired
            label="مشخصات"
            labelPlacement="outside"
          />
          <Textarea
            className="col-span-1 font-semibold h-full"
            classNames={{
              inputWrapper:
                "h-max bg-white data-[hover=true]:bg-white group-data-[focus=true]:bg-white",
            }}
            isRequired
            label="توضیحات تکمیلی"
            labelPlacement="outside"
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Input
            type="file"
            id="category"
            className="hidden"
            onChange={onFileSelectProductImage}
          />
          <div className="col-span-1">
            <label
              className="bg-white rounded-lg p-5 pt-6 border border-solid cursor-pointer flex flex-col items-center"
              htmlFor="category"
            >
              <Icon icon="mdi:image-add-outline" width="36" height="36" />
              <span className="text-medium text-palette-50 mt-2">
                برای بارگذاری <span className="text-palette-50">کلیک</span>{" "}
                نمایید
              </span>
            </label>
          </div>
          <div className="col-span-1 flex gap-4">
            {productImgDisplays.map((img, index) => (
              <div
                key={index}
                className="relative border border-solid rounded-lg w-36 h-24"
              >
                <img
                  src={img}
                  alt={`category-${index}`}
                  className="w-full h-full"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs p-1 rounded-full w-5 h-5"
                >
                  ✕
                </button>
                <label
                  htmlFor={`replace-${index}`}
                  className="absolute bottom-1 left-1 bg-gray-800 text-white px-2 py-1 text-xs cursor-pointer rounded"
                >
                  جایگزینی
                </label>
                <Input
                  type="file"
                  id={`replace-${index}`}
                  className="hidden"
                  onChange={(e) => replaceImage(index, e)}
                />
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="solid"
          className="bg-blue-600 text-white w-1/4 py-4 px-8 font-bold"
        >
          ویرایش
        </Button>
      </div>
    </>
  );
}

export default EditProduct;
