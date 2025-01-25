"use client";
import Image from "next/image";
import TestBannerImg from "@/public/images/testProfileBanner.jpg";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { USER_PANEL_PATH } from "@/routes/path";
import { usePathname } from "next/navigation";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-16">
      <div className="w-full md:h-[300px] relative">
        <Image
          src={TestBannerImg}
          alt="Banner"
          className="object-cover w-full h-full block"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black/50 to-black/50 flex items-center justify-center">
          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
            داشبورد کیان علوی
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 lg:col-span-1 border-b border-b-gray-900/50 lg:border-b-0 lg:border-l lg:border-l-gray-900/50">
          <nav className="flex flex-col gap-6 py-6 px-4">
            <Link
              href={USER_PANEL_PATH.orders}
              className={`${
                pathname === USER_PANEL_PATH.orders ? "bg-palette-700" : ""
              } flex items-center gap-4 cursor-pointer text-sm lg:text-base text-palette-50 font-semibold py-3.5 px-4 lg:px-5 rounded`}
            >
              <Icon icon="icon-park-outline:shopping" width="24" height="24" />
              سفارشات
            </Link>
            <Link
              href={USER_PANEL_PATH.detailsAccount}
              className={`${
                pathname === USER_PANEL_PATH.detailsAccount
                  ? "bg-palette-700"
                  : ""
              } flex items-center gap-4 cursor-pointer text-sm lg:text-base text-palette-50 font-semibold py-3.5 px-4 lg:px-5 rounded`}
            >
              <Icon icon="solar:user-outline" width="24" height="24" />
              جزئیات حساب
            </Link>
            <Link
              href={USER_PANEL_PATH.changePassword}
              className={`${
                pathname === USER_PANEL_PATH.changePassword
                  ? "bg-palette-700"
                  : ""
              } flex items-center gap-4 cursor-pointer text-sm lg:text-base text-palette-50 font-semibold py-3.5 px-4 lg:px-5 rounded`}
            >
              <Icon icon="lets-icons:setting-line" width="24" height="24" />
              تغییر رمز عبور
            </Link>
            <button
              className={`flex items-center gap-4 cursor-pointer text-sm lg:text-base text-palette-50 font-semibold py-3.5 px-4 lg:px-5 rounded`}
            >
              <Icon icon="mingcute:exit-line" width="24" height="24" />
              خروج
            </button>
          </nav>
        </div>
        <div className="col-span-4 lg:col-span-3 px-16">{children}</div>
      </div>
    </div>
  );
}
