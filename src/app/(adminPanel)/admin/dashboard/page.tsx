import AdminDashboardBox from "@/components/templates/AdminDashboardBox";
import {Icon} from "@iconify/react";

export default function Dashboard() {
    return (
        <div className="grid grid-cols-6 gap-4">
            <AdminDashboardBox title=" کاربران"
                               icon={<Icon icon="material-symbols:dashboard-rounded" width="24" height="24"/>}
                               value={10}/>
            <AdminDashboardBox title=" محصولات" icon={<Icon icon="dashicons:products" width="24" height="24"/>}
                               value={20}/>
            <AdminDashboardBox title=" دسته بندی ها"
                               icon={<Icon icon="dashicons:category" width="24" height="24"/>} value={5}/>
            <AdminDashboardBox title=" نظرات"
                               icon={<Icon icon="material-symbols:comment" width="24" height="24"/>} value={150}/>
            <AdminDashboardBox title=" پیام ها"
                               icon={<Icon icon="flowbite:messages-solid" width="24" height="24"/>} value={20}/>
        </div>
    );
}

