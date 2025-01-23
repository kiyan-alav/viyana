"use client"
import {Input, Textarea} from "@heroui/input";
import {Button} from "@heroui/button";
import {Form} from "@heroui/form";
import {Icon} from "@iconify/react";
import React, {useState} from "react";
import {User} from "@heroui/react";
import Image from "next/image";
import TestCategory from "@/public/images/shop-logo-8.jpg";

function CommentSection() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleMouseEnter = function (index: number)  {
        setHover(index);
    };

    const handleMouseLeave = function()  {
        setHover(0);
    };

    const handleClick = function(index: number)  {
        setRating(index);
    };

    return (
        <div className="flex flex-col gap-8">
            <Form className="w-full grid grid-cols-2 gap-4" validationBehavior="native">
                <div className="flex items-center gap-1 ltrClass col-span-2">
                    {Array.from({length: 5}, (_, index) => {
                        const starIndex = index + 1;

                        return (
                            <Icon
                                key={starIndex}
                                icon="material-symbols:star"
                                className={`cursor-pointer transition duration-200 ${
                                    starIndex <= (hover || rating)
                                        ? "text-palette-500"
                                        : "text-palette-600"
                                }`}
                                width={24}
                                height={24}
                                onMouseEnter={() => handleMouseEnter(starIndex)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick(starIndex)}
                            />
                        );
                    })}
                </div>
                <Textarea className="col-span-2 font-semibold" labelPlacement="outside" label="پیام" isRequired
                          errorMessage="لطفا نظر خود را وارد کنید" classNames={{
                    inputWrapper: "h-max"
                }}/>
                <Input
                    isRequired
                    errorMessage="لطفا ایمیل خود را وارد کنید"
                    label="ایمیل"
                    labelPlacement="outside"
                    name="email"
                    type="email"
                    className="col-span-2 md:col-span-1 font-semibold"
                />
                <Input
                    label="موضوع"
                    labelPlacement="outside"
                    name="subject"
                    type="text"
                    className="col-span-2 md:col-span-1 font-semibold"
                />
                <Button type="submit" variant="solid" className="bg-palette-50 text-white w-1/4 py-4 px-8 font-bold">
                    ارسال پیام
                </Button>
            </Form>
            <hr />
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image
                                src={TestCategory}
                                alt="logo"
                                width={96}
                                height={96}
                                className="w-full h-full overflow-hidden"
                            />
                        </div>
                        <h3 className="text-sm">کیان علوی</h3>
                    </div>
                    <p className="text-sm">طفاً مستندات را با دقت مطالعه کنید. طفاً مستندات را با دقت مطالعه کنید. طفاً مستندات
                        را با دقت مطالعه کنید. طفاً مستندات را با دقت مطالعه کنید. طفاً مستندات را با دقت مطالعه
                        کنید. </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image
                                src={TestCategory}
                                alt="logo"
                                width={96}
                                height={96}
                                className="w-full h-full overflow-hidden"
                            />
                        </div>
                        <h3 className="text-sm">کیان علوی</h3>
                    </div>
                    <p className="text-sm">طفاً مستندات را با دقت مطالعه کنید. طفاً مستندات را با دقت مطالعه کنید. طفاً
                        مستندات
                        را با دقت مطالعه کنید. طفاً مستندات را با دقت مطالعه کنید. طفاً مستندات را با دقت مطالعه
                        کنید. </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image
                                src={TestCategory}
                                alt="logo"
                                width={96}
                                height={96}
                                className="w-full h-full overflow-hidden"
                            />
                        </div>
                        <h3 className="text-sm">کیان علوی</h3>
                    </div>
                    <p className="text-sm">طفاً مستندات را با دقت مطالعه کنید. طفاً مستندات را با دقت مطالعه کنید. طفاً
                        مستندات
                        را با دقت مطالعه کنید. طفاً مستندات را با دقت مطالعه کنید. طفاً مستندات را با دقت مطالعه
                        کنید. </p>
                </div>
            </div>
        </div>
    );
}

export default CommentSection;