import Image from "next/image";
import TestProduct from "@/public/images/sample.webp";
import Link from "next/link";
import { MAIN_PATH } from "@/routes/path";

function HorizontalProductCard() {
  return (
    <Link href={`${MAIN_PATH.productDetail("1")}`} className="block">
      <div className="flex justify-between">
        <div className="w-20 h-20">
          <Image src={TestProduct} alt="logo" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="">نام محصول</p>
          <p className="">2/000/000</p>
        </div>
      </div>
    </Link>
  );
}

export default HorizontalProductCard;
