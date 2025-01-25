import ServiceItem from "./ServiceItem";
import ServiceImg1 from "@/public/images/delivery.svg";
import ServiceImg2 from "@/public/images/product.svg";
import ServiceImg3 from "@/public/images/risk-free.svg";
import ServiceImg4 from "@/public/images/saving.svg";

function Services() {
  return (
    <div className="grid grid-cols-4">
      <ServiceItem
        img={ServiceImg4}
        text="اگر عضویت شما در پس انداز پرداخت نشود، ما تفاوت را بازپرداخت می کنیم"
        title="پس انداز تضمین شده"
      />
      <ServiceItem
        img={ServiceImg3}
        text="اگر عضویت شما در پس انداز پرداخت نشود، ما تفاوت را بازپرداخت می کنیم"
        title="بدون ریسک امتحان کنید"
      />
      <ServiceItem
        img={ServiceImg1}
        text="اگر عضویت شما در پس انداز پرداخت نشود، ما تفاوت را بازپرداخت می کنیم"
        title="تحویل فوق العاده سریع"
      />
      <ServiceItem
        img={ServiceImg2}
        text="اگر عضویت شما در پس انداز پرداخت نشود، ما تفاوت را بازپرداخت می کنیم"
        title="بیش از 1000 محصول با قیمت تمام شده"
      />
    </div>
  );
}

export default Services;
