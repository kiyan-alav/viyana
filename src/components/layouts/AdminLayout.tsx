"use client"
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import {ADMIN_PANEL_PATH} from "@/routes/path";
import {Icon} from "@iconify/react";
import AdminHeader from "@/components/modules/AdminHeader";
import {useState} from "react";
import {usePathname} from "next/navigation";

function AdminLayout({
                         children,
                     }: Readonly<{
    children: React.ReactNode;
}>) {
    const [isOpenSidebar, setIsOpenSidebar] = useState(true)
    const pathname = usePathname();


    return (
        <div className="flex bg-gray-100 h-full">
            <div
                className={`${isOpenSidebar ? "w-64 p-8" : "w-0 p-0 overflow-hidden"}  flex flex-col gap-16 shadow-lg border-l-2 border-l-gray-400/50 transition-all`}>
                <div className="w-36 self-center">
                    <Image
                        src={logo}
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <nav className="flex flex-col gap-2">
                    <Link href={ADMIN_PANEL_PATH.dashboard}
                          className={`flex items-center gap-4 px-1.5 py-1 rounded-lg text-lg font-semibold text-palette-50 transition-colors hover:bg-blue-600 hover:text-white ${pathname === ADMIN_PANEL_PATH.dashboard ? "bg-blue-600 text-white" : ""}`}>
                        <Icon icon="material-symbols:dashboard-rounded" width="24" height="24"/>
                        داشبورد
                    </Link>
                    <Link href={ADMIN_PANEL_PATH.users}
                          className={`flex items-center gap-4 px-1.5 py-1 rounded-lg text-lg font-semibold text-palette-50 transition-colors hover:bg-blue-600 hover:text-white ${pathname === ADMIN_PANEL_PATH.users ? "bg-blue-600 text-white" : ""}`}>
                        <Icon icon="material-symbols:dashboard-rounded" width="24" height="24"/>
                        کاربران
                    </Link>
                    <Link href={ADMIN_PANEL_PATH.products}
                          className={`flex items-center gap-4 px-1.5 py-1 rounded-lg text-lg font-semibold text-palette-50 transition-colors hover:bg-blue-600 hover:text-white ${pathname === ADMIN_PANEL_PATH.products ? "bg-blue-600 text-white" : ""}`}>
                        <Icon icon="dashicons:products" width="24" height="24"/>
                        محصولات
                    </Link>
                    <Link href={ADMIN_PANEL_PATH.category}
                          className={`flex items-center gap-4 px-1.5 py-1 rounded-lg text-lg font-semibold text-palette-50 transition-colors hover:bg-blue-600 hover:text-white ${pathname === ADMIN_PANEL_PATH.category ? "bg-blue-600 text-white" : ""}`}>
                        <Icon icon="dashicons:category" width="24" height="24"/>
                        دسته بندی ها
                    </Link>
                    <Link href={ADMIN_PANEL_PATH.comments}
                          className={`flex items-center gap-4 px-1.5 py-1 rounded-lg text-lg font-semibold text-palette-50 transition-colors hover:bg-blue-600 hover:text-white ${pathname === ADMIN_PANEL_PATH.comments ? "bg-blue-600 text-white" : ""}`}>
                        <Icon icon="material-symbols:comment" width="24" height="24"/>
                        نظرات
                    </Link>
                    <Link href={ADMIN_PANEL_PATH.banners}
                          className={`flex items-center gap-4 px-1.5 py-1 rounded-lg text-lg font-semibold text-palette-50 transition-colors hover:bg-blue-600 hover:text-white ${pathname === ADMIN_PANEL_PATH.banners ? "bg-blue-600 text-white" : ""}`}>
                        <Icon icon="material-symbols:planner-banner-ad-pt" width="24" height="24"/>
                        بنرها
                    </Link>
                    <Link href={ADMIN_PANEL_PATH.messages}
                          className={`flex items-center gap-4 px-1.5 py-1 rounded-lg text-lg font-semibold text-palette-50 transition-colors hover:bg-blue-600 hover:text-white ${pathname === ADMIN_PANEL_PATH.messages ? "bg-blue-600 text-white" : ""}`}>
                        <Icon icon="flowbite:messages-solid" width="24" height="24"/>
                        پیام ها
                    </Link>
                    <button
                        className="flex items-center gap-4 px-1.5 py-1 rounded-lg text-lg font-semibold text-blue-600">
                        <Icon icon="ion:exit" width="24" height="24"/>
                        خروج
                    </button>
                </nav>
            </div>
            <div className="flex-1">
                <AdminHeader onOpenSidebar={() => setIsOpenSidebar(prev => !prev)}/>
                <div className="p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;