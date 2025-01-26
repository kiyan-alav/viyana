import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";

function RootAdminLayout({
                             children,
                         }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AdminLayout>{children}</AdminLayout>
    );
}

export default RootAdminLayout;