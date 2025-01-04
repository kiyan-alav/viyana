import { PropsWithChildren } from "react";
import Header from "../modules/Header";
import Footer from "../modules/Footer";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <div className="max-w-[1440px] mx-auto my-8 px-8 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
