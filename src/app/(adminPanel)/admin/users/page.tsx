import AdminUsersTable from "@/components/templates/AdminUsersTable";

function Users() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-palette-50">
        کاربران سایت
      </h2>
      <AdminUsersTable />
    </div>
  );
}

export default Users;
