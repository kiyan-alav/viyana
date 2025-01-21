"use client"
import React from 'react';
import {Select, SelectItem, Slider, Switch} from "@heroui/react";
import {usePathname} from "next/navigation";

export const categories = [
    {key: "1", label: "دسته بندی 1"},
    {key: "2", label: "دسته بندی 2"},
    {key: "3", label: "دسته بندی 3"},
    {key: "4", label: "دسته بمدی 4"},
];

function ProductsFilter() {
    const pathname = usePathname()

    return (
        <div className="col-span-4 md:col-span-1">
            <div className="flex flex-col gap-16">
                <div className="">
                    {
                        pathname.startsWith("/products/category") ? <p className="md:text-sm text-base font-bold">دسته بندی فلان</p> : <Select className="max-w-xs" label="دسته بندی...">
                            {categories.map((category) => (
                                <SelectItem key={category.key}>{category.label}</SelectItem>
                            ))}
                        </Select>
                    }
                </div>
                <div className="ltrClass">
                    <Slider
                        className="max-w-md"
                        defaultValue={0.4}
                        maxValue={1}
                        minValue={0}
                        label="...قیمت تا"
                        size="md"
                        step={0.01}
                    />
                </div>
                <div className="">
                    <Switch>فقط کالاهای موجود</Switch>
                </div>
            </div>
        </div>
    );
}

export default ProductsFilter;