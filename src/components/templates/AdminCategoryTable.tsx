"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";
import TestCategory from "@/public/images/shop-logo-8.jpg";
import Image from "next/image";
import { Input } from "@heroui/input";
import { useState } from "react";

const tableColumns = [
  { label: "ردیف", key: "index" },
  { label: "نام دسته بندی", key: "category" },
  { label: "", key: "action" },
];

const rows = [
  {
    index: 1,
    category: "دسته بندی 1",
  },
  {
    index: 2,
    category: "دسته بندی 2",
  },
];

function AdminCategoryTable() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [categoryImgFile, setCategoryImgFile] = useState<string | File | null>(
    null
  );
  const [categoryImgDisplay, setCategoryImgDisplay] = useState<
    string | File | null
  >(null);

  const onFileSelectCategoryImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCategoryImgFile(file);
        setCategoryImgDisplay(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteMessageHandler = function (id: string) {
    Swal.fire({
      title: "آیا میخواهید دسته بندی مورد نظر را از لیست حذف کنید؟",
      icon: "warning",
      confirmButtonText: "بله",
      showCancelButton: true,
      cancelButtonText: "خیر",
      customClass: {
        confirmButton: "bg-green-600",
        cancelButton: "bg-red-600",
      },
    }).then(({ value }) => {
      if (value) {
        // call api
      }
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={onOpen}
        className="self-start text-[13px] md:text-sm leading-4 flex items-center gap-2 font-semibold justify-center border-2 border-blue-600 px-4 py-2 rounded text-blue-600 hover:text-white hover:bg-blue-600 transition-colors"
      >
        <Icon icon="mingcute:add-fill" width="20" height="20" />
        افزودن دسته بندی جدید
      </button>
      <Table
        classNames={{
          wrapper: "shadow-none",
          tr: "",
          td: "px-4 py-5 border-b border-gray-300 text-palette-50 text-sm lg:text-base font-medium",
          th: "px-4 py-5 font-semibold bg-gray-100 text-palette-50 text-sm lg:text-base",
        }}
      >
        <TableHeader>
          {tableColumns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.index}>
              <TableCell>{row.index}</TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={TestCategory}
                      alt="logo"
                      className="w-full h-full"
                    />
                  </div>
                  <span>{row.category}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  <button
                    onClick={onOpen}
                    className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer font-semibold text-center justify-center border-0 border-transparent text-blue-600"
                  >
                    <Icon
                      icon="material-symbols:edit-outline"
                      width="24"
                      height="24"
                    />
                  </button>
                  <button
                    onClick={() => deleteMessageHandler("11")}
                    className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer font-semibold text-center justify-center border-0 border-transparent text-red-600"
                  >
                    <Icon icon="mdi:trash" width="24" height="24" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ویرایش یا افزودن دسته بندی
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <Input label="نام دسته بندی" type="text" />
                <div className="">
                  {!categoryImgFile && (
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
                  {categoryImgFile && (
                    <div className="border border-solid rounded-lg w-36 h-24">
                      <img
                        src={categoryImgDisplay as string}
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
                    {categoryImgFile && (
                      <label
                        className="flex items-center gap-1 text-sm text-palette-50 cursor-pointer"
                        htmlFor="cateogory"
                      >
                        جایگزینی پوستر
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

export default AdminCategoryTable;
