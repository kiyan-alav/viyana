import AdminProductTable from "@/components/templates/AdminProductTable";

function Products() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-palette-50">
        محصولات
      </h2>
      <AdminProductTable />
    </div>
  );
}

export default Products;
