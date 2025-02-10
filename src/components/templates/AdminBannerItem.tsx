import React from "react";
import Image from "next/image";
import TestProduct from "@/public/images/testproduct.jpg";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";

function AdminBannerItem() {
  const deleteMessageHandler = function (id: string) {
    Swal.fire({
      title: "آیا میخواهید بنر مورد نظر را از لیست حذف کنید؟",
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
    <div className="block w-[250px] relative group">
      <div className="w-full group box-border overflow-hidden flex rounded-md cursor-pointer pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-md bg-white border">
        <div className="w-full">
          <Image
            src={TestProduct}
            alt="product"
            className="w-full h-full overflow-hidden"
          />
        </div>
        <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
          <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-slate-900 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            ratione?
          </h2>
        </div>
      </div>
      <div className="absolute top-0 left-0 transition-all duration-300 ease-in-out bg-black/20 backdrop-blur w-full h-full rounded-md opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6">
        <button
          className="text-white bg-red-600 rounded p-1"
          onClick={() => deleteMessageHandler("11")}
        >
          <Icon icon="iconamoon:trash-fill" width="24" height="24" />
        </button>
        <button className="text-white bg-blue-600 rounded p-1">
          <Icon icon="material-symbols:edit" width="24" height="24" />
        </button>
        <Link href="/asdfasdf" className="text-white bg-slate-800 rounded p-1">
          <Icon icon="line-md:link" width="24" height="24" />
        </Link>
      </div>
    </div>
  );
}

export default AdminBannerItem;
