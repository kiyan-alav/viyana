"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Icon} from "@iconify/react";
import {Badge} from "@nextui-org/badge";
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
} from "@nextui-org/drawer";
import {useDisclosure, User} from "@nextui-org/react";
import HorizontalProductCard from "./HorizontalProductCard";
import {MAIN_PATH, USER_PANEL_PATH} from "@/routes/path";

function Header() {
    const {
        isOpen: isOpenSidebar,
        onOpen: onOpenSidebar,
        onClose: onCloseSidebar,
    } = useDisclosure();
    const {
        isOpen: isOpenShoppingCard,
        onOpen: onOpenShoppingCard,
        onClose: onCloseShoppingCard,
    } = useDisclosure();

    return (
        <>
            <div className="bg-white shadow-md py-8 flex items-center justify-around">
                <div className="flex items-center gap-8">
                    <div className="w-24">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            layout="responsive"
                            width={96}
                            height={96}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="hidden md:flex md:items-center md:gap-4">
                        <Link
                            href={MAIN_PATH.home}
                            className="transition-all hover:border-b-4 hover:border-b-black hover:font-medium"
                        >
                            خانه
                        </Link>
                        <Link
                            href={MAIN_PATH.products}
                            className="transition-all hover:border-b-4 hover:border-b-black hover:font-medium"
                        >
                            محصولات
                        </Link>
                        <Link
                            href={MAIN_PATH.contactUs}
                            className="transition-all hover:border-b-4 hover:border-b-black hover:font-medium"
                        >
                            تماس با ما
                        </Link>
                        <Link
                            href={MAIN_PATH.aboutUs}
                            className="transition-all hover:border-b-4 hover:border-b-black hover:font-medium"
                        >
                            درباره ما
                        </Link>
                        <Link
                            href={MAIN_PATH.blogs}
                            className="transition-all hover:border-b-4 hover:border-b-black hover:font-medium"
                        >
                            بلاگ
                        </Link>
                    </div>
                    <button onClick={onOpenSidebar} className="block md:hidden">
                        <Icon
                            icon="material-symbols:menu-rounded"
                            width="24"
                            height="24"
                            style={{color: "#000"}}
                        />
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    {!false ? (
                        <Link href={MAIN_PATH.register}>ورود / ثبت نام</Link>
                    ) : (
                        <Link href={USER_PANEL_PATH.dashboard}>
                            <User
                                avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                }}
                                name="کیان علوی"
                            />
                        </Link>
                    )}
                    <button onClick={onOpenShoppingCard}>
                        <Badge color="primary" content="5">
              <span>
                <Icon
                    icon="icon-park-outline:shopping"
                    width="36"
                    height="36"
                    style={{color: "#000"}}
                />
              </span>
                        </Badge>
                    </button>
                </div>
            </div>
            <Drawer
                isOpen={isOpenSidebar}
                size="xs"
                onClose={onCloseSidebar}
                backdrop="blur"
            >
                <DrawerContent>
                    {() => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1"></DrawerHeader>
                            <DrawerBody>
                                <div className="flex flex-col gap-4">
                                    <Link
                                        href={MAIN_PATH.home}
                                        className="transition-all hover:pr-4 hover:font-medium"
                                    >
                                        خانه
                                    </Link>
                                    <Link
                                        href={MAIN_PATH.products}
                                        className="transition-all hover:pr-4 hover:font-medium"
                                    >
                                        محصولات
                                    </Link>
                                    <Link
                                        href={MAIN_PATH.contactUs}
                                        className="transition-all hover:pr-4 hover:font-medium"
                                    >
                                        تماس با ما
                                    </Link>
                                    <Link
                                        href={MAIN_PATH.aboutUs}
                                        className="transition-all hover:pr-4 hover:font-medium"
                                    >
                                        درباره ما
                                    </Link>
                                    <Link
                                        href={MAIN_PATH.blogs}
                                        className="transition-all hover:pr-4 hover:font-medium"
                                    >
                                        بلاگ
                                    </Link>
                                </div>
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
            <Drawer
                isOpen={isOpenShoppingCard}
                size="lg"
                onClose={onCloseShoppingCard}
                placement="left"
                backdrop="blur"
            >
                <DrawerContent>
                    {() => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1"></DrawerHeader>
                            <DrawerBody className="mt-16">
                                {!false ? (
                                    <div className="flex flex-col gap-8">
                                        <HorizontalProductCard/>
                                        <HorizontalProductCard/>
                                        <HorizontalProductCard/>
                                        <HorizontalProductCard/>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center gap-4 h-full">
                                        <div className="w-48">
                                            <Image
                                                src="/images/not-found-alt.svg"
                                                alt="logo"
                                                layout="responsive"
                                                width={96}
                                                height={96}
                                                className="w-full h-full"
                                            />
                                        </div>
                                        <h3 className="">سبد خرید خالی است</h3>
                                    </div>
                                )}
                            </DrawerBody>
                            <DrawerFooter className="flex justify-center py-12">
                                <Link
                                    href={MAIN_PATH.shoppingCart}
                                    className="bg-slate-900 flex-1 text-white text-center py-4 rounded-lg"
                                >
                                    مشاهده سبد خرید
                                </Link>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Header;
