import ProductItem from "../modules/ProductItem";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface ProductSectionProps {
  title: string;
  link: string;
}

export default function ProductSection({ title, link }: ProductSectionProps) {
  return (
    <>
      <div className="my-16">
        <div className="flex items-center justify-between">
          <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
            {title}
          </h3>
          <Link href={link} className="font-semibold flex items-center gap-1">
            مشاهده همه
            <Icon icon="ep:arrow-left-bold" width="15" height="15" />
          </Link>
        </div>
        <div className="grid gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 bg-white grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 my-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </>
  );
}
