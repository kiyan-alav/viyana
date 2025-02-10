interface AdminDashboardBoxProps {
  title: string;
  icon: React.ReactNode;
  value: number;
}

function AdminDashboardBox({ title, icon, value }: AdminDashboardBoxProps) {
  return (
    <div className="col-span-2 h-36 shadow-sm rounded-lg px-4 py-8 flex justify-between items-center bg-white border text-lg">
      <h2 className="text-blue-600 flex items-center gap-2">
        {icon}
        <span className="font-semibold"> تعداد کل{title}</span>
      </h2>
      <p className="text-blue-600 font-semibold">{value}</p>
    </div>
  );
}

export default AdminDashboardBox;
