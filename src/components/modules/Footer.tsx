import {Icon} from "@iconify/react";
import Link from "next/link";
import {MAIN_PATH} from "@/routes/path";

function Footer() {
    return <div className="mt-28 shadow-2xl border-t-1.5">
        <div className="px-8 py-16 grid grid-cols-4 gap-4 justify-items-center">
            <div className="col-span-2 lg:col-span-1">
                <div className="flex flex-col">
                    <h4 className="mb-5 text-sm font-semibold text-palette-50 md:text-base">شبکه های اجتماعی</h4>
                    <div className="flex flex-col gap-2">
                        <a href="" target="_blank"
                           className="flex items-center gap-2 transition-colors duration-200 hover:text-black text-palette-100 text-xs lg:text-sm">
                            <Icon icon="mdi:instagram" width="24" height="24"/>
                            اینستاگرام
                        </a>
                        <a href="" target="_blank"
                           className="flex items-center gap-2 transition-colors duration-200 hover:text-black text-palette-100 text-xs lg:text-sm">
                            <Icon icon="ic:baseline-telegram" width="24" height="24"/>
                            تلگرام
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <div className="flex flex-col">
                    <h4 className="mb-5 text-sm font-semibold text-palette-50 md:text-base">تماس با ما</h4>
                    <div className="flex flex-col gap-2">
                        <Link href={MAIN_PATH.contactUs}
                              className="flex items-center gap-2 transition-colors duration-200 hover:text-black text-palette-100 text-xs lg:text-sm">
                            <Icon icon="material-symbols:call" width="24" height="24"/>
                            راه های ارتباطی با ویانا
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <div className="flex flex-col">
                    <h4 className="mb-5 text-sm font-semibold text-palette-50 md:text-base">درباره ما</h4>
                    <div className="flex flex-col gap-2">
                        <Link href={MAIN_PATH.aboutUs}
                              className="flex items-center gap-2 transition-colors duration-200 hover:text-black text-palette-100 text-xs lg:text-sm">
                            <Icon icon="ix:about" width="24" height="24"/>
                            درباره ویانا
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <div className="flex flex-col">
                    <h4 className="mb-5 text-sm font-semibold text-palette-50 md:text-base">دسته بندی های برتر</h4>
                    <div className="flex flex-col gap-2">
                        <Link href={MAIN_PATH.category("1")}
                              className="flex items-center gap-2 transition-colors duration-200 hover:text-black text-palette-100 text-xs lg:text-sm">
                            دسته بندی 1
                        </Link>
                        <Link href={MAIN_PATH.category("1")}
                              className="flex items-center gap-2 transition-colors duration-200 hover:text-black text-palette-100 text-xs lg:text-sm">
                            دسته بندی 2
                        </Link>
                        <Link href={MAIN_PATH.category("1")}
                              className="flex items-center gap-2 transition-colors duration-200 hover:text-black text-palette-100 text-xs lg:text-sm">
                            دسته بندی 3
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-4 border-t-4 border-t-palette-200 flex flex-col items-center gap-2">
            <p className="text-palette-100 text-xs lg:text-sm leading-6 font-bold">
                حق نشر © 2025 <a href="https://redq.io/" target="_blank" className="text-palette-200">REDQ</a> کلیه حقوق
                محفوظ است
            </p>
            <p className="text-palette-100 text-xs lg:text-sm leading-6 font-bold">
                توسعه داده شده توسط <strong>کیان علوی</strong>
            </p>
        </div>
    </div>
}

export default Footer;
