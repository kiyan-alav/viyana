import MainLayout from "@/components/layouts/MainLayout";
import MainContent from "@/components/templates/MainBanner";
import ProductSection from "@/components/templates/ProductSection";
import Image from "next/image";
import TestBanner from "@/public/images/banner-1.jpg";
import Services from "@/components/templates/Services";
import { MAIN_PATH } from "@/routes/path";

export default function Home() {
  return (
    <>
      <MainLayout>
        <MainContent />
        <ProductSection title="پرفروش ترین ها" link={MAIN_PATH.products} />
        <div className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0">
          <a
            className="h-full group flex justify-center overflow-hidden"
            href=""
          >
            <Image
              src={TestBanner}
              alt="product"
              className="w-full h-full overflow-hidden"
            />
          </a>
        </div>
        <ProductSection title="محصولات جدید" link={MAIN_PATH.products} />
        <Services />
      </MainLayout>
    </>
  );
}
