import Image from "next/image";
import {Icon} from "@iconify/react";
import TestCategory from "@/public/images/shop-logo-8.jpg";
import Link from "next/link";
import {MAIN_PATH} from "@/routes/path";

function CategoryItem() {
    return (
        <Link href={MAIN_PATH.category("1")} className="block">
            <div className="bg-palette-300 shadow-sm flex justify-between rounded-md p-4">
                <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                            src={TestCategory}
                            alt="logo"
                            width={96}
                            height={96}
                            className="w-full h-full overflow-hidden"
                        />
                    </div>
                    <h2 className="text-sm font-bold">نام دسته بندی</h2>
                </div>
                <div className="flex items-center gap-2">
                    <span className="bg-[palette-400 rounded-sm w-4 h-4 flex items-center justify-center text-sm">
                      5
                    </span>
                    <span>
                      <Icon
                          icon="ep:arrow-left-bold"
                          width="12"
                          height="12"
                          style={{color: "#000"}}
                      />
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default CategoryItem;
