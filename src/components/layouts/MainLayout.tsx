import React from "react";
import Header from "../modules/Header";
import Footer from "../modules/Footer";

export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="max-w-[1440px] w-full mx-auto my-8 px-8 flex-1">{children}</div>
            <Footer/>
        </div>
    );
};