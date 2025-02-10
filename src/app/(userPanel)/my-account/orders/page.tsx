import UserOrdersTable from "@/components/templates/UserOrdersTable";

function Orders() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-palette-50">
        سفارشات
      </h2>
      <UserOrdersTable />
    </div>
  );
}

export default Orders;
