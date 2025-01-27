import {Icon} from "@iconify/react";
import {User} from "@heroui/user";

interface AdminHeaderProps {
    onOpenSidebar: VoidFunction
}

function AdminHeader({onOpenSidebar}: AdminHeaderProps) {
    return (
        <div className="p-8 flex items-center justify-between border-b">
            <button onClick={onOpenSidebar}>
                <Icon icon="mdi:hamburger-menu" width="32" height="32"/>
            </button>
            <div className="ltrClass">
                <User
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                    description="مدیر سایت"
                    name="کیان علوی"
                />
            </div>
        </div>
    );
}

export default AdminHeader;