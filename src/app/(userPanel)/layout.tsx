import React from 'react';
import MainLayout from "@/components/layouts/MainLayout";
import UserLayout from "@/components/layouts/UserLayout";

export default function RootUserLayout({
                                           children,
                                       }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <MainLayout>
            <UserLayout>
                {children}
            </UserLayout>
        </MainLayout>
    );
}