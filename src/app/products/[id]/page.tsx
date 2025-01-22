"use client";
import MainLayout from "@/components/layouts/MainLayout";
import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import TestSlider1 from "@/public/images/banner-2.jpg";
import TestSlider2 from "@/public/images/banner-3.jpg";
import TestSlider3 from "@/public/images/banner-8.jpg";

function ProductDetail(props) {
    return (
        <MainLayout>
            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
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
                </div>
                <div className="col-span-2 md:col-span-1">
                    ddd
                </div>
            </div>
        </MainLayout>
    );
}

export default ProductDetail;

