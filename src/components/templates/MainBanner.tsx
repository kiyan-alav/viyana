"use client";
import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import TestSlider1 from "@/public/images/banner-2.jpg";
import TestSlider2 from "@/public/images/banner-3.jpg";
import TestSlider3 from "@/public/images/banner-8.jpg";

function MainBanner() {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-6 lg:col-span-2">
        <div className="flex flex-col gap-4">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
      <div className="col-span-6 lg:col-span-4">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="h-full"
        >
          <SwiperSlide className="rounded-lg overflow-hidden">
            <div className="h-full w-full">
              <Image
                src={TestSlider1}
                alt="logo"
                className="w-full h-full overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg overflow-hidden">
            <div className="h-full w-full">
              <Image
                src={TestSlider2}
                alt="logo"
                className="w-full h-full overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg overflow-hidden">
            <div className="h-full w-full">
              <Image
                src={TestSlider3}
                alt="logo"
                className="w-full h-full overflow-hidden"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MainBanner;
