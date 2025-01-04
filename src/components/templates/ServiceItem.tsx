import Image from "next/image";

interface ServiceItemProps {
  img: string;
  title: string;
  text: string;
}

function ServiceItem({ img, text, title }: ServiceItemProps) {
  return (
    <div className="col-span-4 md:col-span-2 lg:col-span-1 gap-4">
      <div className="flex flex-col items-center gap-4 bg-[#F9F9F9] text-center shadow-md p-4 sm:px-2.5 2xl:px-8 3xl:px-12 xl:py-12 h-full">
        <div className="w-14 md:w-auto mx-auto">
          <Image
            src={img}
            alt="product"
            className="w-full h-full overflow-hidden"
          />
        </div>
        <div className="-mb-1">
          <h3 className="text-[#212121] text-base font-semibold mb-1.5 md:mb-2">
            {title}
          </h3>
          <p className="text-[#5a5a5a] text-xs leading-6 md:leading-7">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
