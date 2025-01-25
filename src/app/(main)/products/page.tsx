import MainLayout from "@/components/layouts/MainLayout";
import ProductsFilter from "@/components/templates/ProductsFilter";
import ProductItem from "@/components/modules/ProductItem";
import {Pagination} from "@heroui/pagination";

function Products() {
    return (
        <MainLayout>
            <div className="grid grid-cols-4 gap-4">
                <ProductsFilter />
                <div className="col-span-4 md:col-span-3">
                    <div className="grid gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 bg-white grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                    <div className="ltrClass my-8 flex justify-center">
                        <Pagination initialPage={1} total={10} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Products;