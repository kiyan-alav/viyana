import Image from "next/image";
import TestProduct from "@/public/images/testproduct.jpg";

export default function ProductItem() {
  return (
    <>
      <div className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-md bg-white">
        <div className="w-full">
          <Image
            src={TestProduct}
            alt="product"
            className="w-full h-full overflow-hidden"
          />
        </div>
        <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
          <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-slate-900">
            نایک مشکی
          </h2>
          <div
            className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
           text-heading"
          >
            <span className="inline-block">$11.00</span>
            <del className="sm:text-base font-normal text-gray-800">$15.00</del>
          </div>
        </div>
      </div>
    </>
  );
}
