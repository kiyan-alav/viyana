"use client"
import MainLayout from "@/components/layouts/MainLayout";
import ProductDetailSlider from "@/components/templates/ProductDetailSlider";
import Link from "next/link";
import {MAIN_PATH} from "@/routes/path";
import {Button} from "@heroui/button";
import {Icon} from "@iconify/react";
import {Accordion, AccordionItem, AccordionItemIndicatorProps} from "@heroui/accordion";
import CommentSection from "@/components/templates/CommentSection";

function ProductDetail() {
    return (
        <MainLayout>
            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                    <ProductDetailSlider/>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <div className="">
                        <div className="flex items-start justify-between">
                            <h2 className="text-palette-50 text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">پسرانه
                                قرمز مانیاک</h2>
                            <div className="flex  gap-4 items-center">
                                <div className="text-palette-50 font-bold text-base md:text-xl lg:text-2xl">$40.00</div>
                                <div className="line-through text-gray-400 text-sm md:text-base lg:text-lg">$50.00</div>
                            </div>
                        </div>
                        <ul className="my-4 space-y-4">
                            <li>
                                <span className="font-semibold text-palette-50 inline-block ltr:pr-2 rtl:pl-2">دسته بندی:</span>
                                <Link href={MAIN_PATH.category("1")}
                                      className="text-palette-100 font-semibold transition hover:underline hover:text-palette-50">کودکان</Link>
                            </li>
                            <li>
                                <span
                                    className="font-semibold text-palette-50 inline-block ltr:pr-2 rtl:pl-2">مشخصات:</span>
                                <p className="text-palette-100 font-semibold text-sm lg:text-base leading-6 lg:leading-8">
                                    لباس کودکان/پوشاک کودکان معمولاً نسبت به لباس بزرگسالان راحت‌تر است و مناسب بازی و
                                    استراحت است. معمولاً از جوراب استفاده می‌شود. اخیراً، بسیاری از لباس‌های کودکان به
                                    شدت تحت تأثیر روندهای مد بزرگسالان قرار گرفته‌اند
                                </p>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <div className="flex items-center gap-8 my-8">
                        <div
                            className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                            <button
                                className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-palette-50">
                                <Icon icon="ic:outline-minus" width="24" height="24"/>
                            </button>
                            <span
                                className="font-semibold flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-12 md:w-20 xl:w-24">2</span>
                            <button
                                className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-palette-50">
                                <Icon icon="ic:outline-plus" width="24" height="24"/>
                            </button>
                        </div>
                        <Button
                            className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent focus-visible:outline-none focus:outline-none rounded-md h-11 md:h-12 px-5 bg-palette-50 text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart w-full md:w-6/12 xl:w-full">افزودن
                            به سبد خرید</Button>
                    </div>
                    <hr/>
                    <Accordion itemClasses={{
                        heading: "text-sm font-bold text-palette-50 md:text-base lg:text-lg",
                        content: "font-semibold pb-6 md:pb-7 leading-7 text-sm text-gray-600",
                        indicator: "text-palette-50"
                    }} >
                        <AccordionItem key="1" title="اطلاعات تکمیلی" indicator={(props :AccordionItemIndicatorProps) => (props.isOpen ? <Icon className="rotate-90" icon="ic:outline-minus" width="24" height="24"/> : <Icon icon="ic:outline-plus" width="24" height="24"/>)}>
                            لطفاً مستندات را با دقت مطالعه کنید. ما همچنین برخی آموزش‌های ویدیویی آنلاین در مورد این مسئله داریم. اگر مشکل همچنان باقی است، لطفاً یک تیکت در انجمن پشتیبانی باز کنید
                        </AccordionItem>
                        <AccordionItem key="2" title="نظرات مشتریان" indicator={(props :AccordionItemIndicatorProps) => (props.isOpen ? <Icon className="rotate-90" icon="ic:outline-minus" width="24" height="24"/> : <Icon icon="ic:outline-plus" width="24" height="24"/>)}>
                            <CommentSection />
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </MainLayout>
    );
}

export default ProductDetail;

