import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import TestSlider1 from "@/public/images/banner-2.jpg";
import TestSlider2 from "@/public/images/banner-3.jpg";
import TestSlider3 from "@/public/images/banner-8.jpg";

function ProductDetailSlider() {
  return (
    <>
      <div className="h-[500]">
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
      <div className="">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={20}
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
    </>
  );
}

export default ProductDetailSlider;
