import React from 'react';
import MainLayout from "@/components/layouts/MainLayout";
import {Icon} from "@iconify/react";

function ContactUs(props) {
    return (
        <MainLayout>
            <div className="grid grid-cols-2">
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-2xl md:text-lg font-bold text-palette-50 pb-7 md:pb-10 lg:pb-6 -mt-1">ما را اینجا پیدا کنید</h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <div className="">
                                <Icon icon="mdi:location" width="24" height="24" className="text-palette-100"/>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-sm font-bold text-palette-50">آدرس</h4>
                                <p className="text-sm mt-0">فلام فلان</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="">
                                <Icon icon="ic:baseline-email" width="24" height="24" className="text-palette-100"/>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-sm font-bold text-palette-50">ایمیل</h4>
                                <p className="text-sm mt-0">example@example.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="">
                                <Icon icon="ic:round-phone" width="24" height="24" className="text-palette-100"/>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-sm font-bold text-palette-50">تلفن</h4>
                                <p className="ltrClass text-sm mt-0">+98 915 111 1111</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1">

                </div>
            </div>
        </MainLayout>
    );
}

export default ContactUs;