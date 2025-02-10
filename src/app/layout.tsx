import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NextProvider from "./NextProvider";
import ReduxProvider from "./../redux/ReduxProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "اکسسوری ویانا",
  description: "توضیحات تستی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ReduxProvider>
          <NextProvider>
            {children}
            <ToastContainer autoClose={5000} />
          </NextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
