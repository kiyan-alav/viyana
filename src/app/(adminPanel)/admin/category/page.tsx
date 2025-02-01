import AdminCategoryTable from "@/components/templates/AdminCategoryTable";

function ProductCategory() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-palette-50">
                دسته بندی های محصولات
            </h2>
            <AdminCategoryTable/>
        </div>
    );
}

export default ProductCategory;