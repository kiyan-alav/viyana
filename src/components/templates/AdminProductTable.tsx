"use client";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ADMIN_PANEL_PATH } from "@/routes/path";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import Image from "next/image";
import TestCategory from "@/public/images/shop-logo-8.jpg";

const tableColumns = [
  { label: "ردیف", key: "index" },
  { label: "نام محصول", key: "product" },
  { label: "نام دسته بندی", key: "category" },
  { label: "مقدار موجودی", key: "count" },
  { label: "", key: "action" },
];

const rows = [
  {
    index: 1,
    product: "محصول 1",
    category: "دسته بندی 1",
    count: 10,
  },
  {
    index: 2,
    product: "محصول 2",
    category: "دسته بندی 2",
    count: 20,
  },
];

function AdminProductTable() {
  const deleteProductHandler = function (id: string) {
    Swal.fire({
      title: "آیا میخواهید محصول مورد نظر را از لیست حذف کنید؟",
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
      <Link
        href={ADMIN_PANEL_PATH.newProduct}
        className="self-start text-[13px] md:text-sm leading-4 flex items-center gap-2 font-semibold justify-center border-2 border-blue-600 px-4 py-2 rounded text-blue-600 hover:text-white hover:bg-blue-600 transition-colors"
      >
        <Icon icon="mingcute:add-fill" width="20" height="20" />
        افزودن محصول جدید
      </Link>
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
                  <span>{row.product}</span>
                </div>
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.count}</TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Link
                    href={ADMIN_PANEL_PATH.editProduct("1")}
                    className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer font-semibold text-center justify-center border-0 border-transparent text-blue-600"
                  >
                    <Icon
                      icon="material-symbols:edit-outline"
                      width="24"
                      height="24"
                    />
                  </Link>
                  <button
                    onClick={() => deleteProductHandler("11")}
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
    </div>
  );
}

export default AdminProductTable;
