import AdminManageBanners from "@/components/templates/AdminManageBanners";

function Banners() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-palette-50">
        مدیریت بنرها
      </h2>
      <AdminManageBanners />
    </div>
  );
}

export default Banners;
