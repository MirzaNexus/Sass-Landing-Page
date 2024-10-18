import Image from "next/image";
import ProductImage from "@/assets/product-image.png";
import Tube from "@/assets/tube.png";
import Pyramid from "@/assets/pyramid.png";
import ArrowRight from "@/assets/arrow-right.svg";
import Icon1 from "@/assets/Icon1.svg";
import Icon2 from "@/assets/Icon2.svg";
import Icon3 from "@/assets/Icon3.svg";
import Icon4 from "@/assets/Icon4.svg";
const Product = () => {
  return (
    <section className=" w-full bg-white flex flex-col gap-5 items-center ">
      <div className=" flex flex-col gap-4 items-center px-2 pt-20 ">
        <span className="tag w-[35%]">Boost your productivity</span>
        <div className="px-2 md:px-0">
          <h1 className=" w-[510px] md:w-[570px] h-[140px] tracking-tighter md:text-[60px] text-[53px] text-center font-bold bg-[linear-gradient(to_bottom,#000_25%,#001354)] text-transparent bg-clip-text leading-[65px]">
            A more effective way to track progress
          </h1>
        </div>
        <p className="w-full md:w-[570px] md:h-[110px] h-[168px]  md:text-[24px] text-[26px] leading-tighter font-semibold text-center">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </p>
      </div>
      <div className="w-full bg-cyan-100 rounded-t-[30px] bg-[linear-gradient(to_bottom,#FFFFFF,#D2DCFF)]">
        <div className="w-full relative overflow-x-clip">
          <Image
            src={ProductImage}
            alt="Product-Image"
            className="w-full object-contain"
          />
          <Image
            src={Tube}
            alt="Tube-Image"
            className="w-60 h-60 absolute hidden md:block bottom-28 -left-20 "
          />
          <Image
            src={Pyramid}
            alt="Pyramid-Image"
            className="w-60 h-60 absolute hidden md:block -top-16 -right-24 lg:top-32 lg:-right-20"
          />
        </div>
        <div className=" w-full md:gap-10 gap-16 lg:px-9 px-20 lg:pt-10 lg:pb-24 md:pb-24 py-16 flex flex-col md:flex-row items-center justify-between md:flex-wrap lg:flex-nowrap">
          <div className="flex flex-col gap-2">
            <Icon4 className="w-6 h-6" />
            <h3 className="font-bold md:text-xl text-2xl">
              Integration ecosystem
            </h3>
            <p className="w-full md:max-w-[260px] max-w-[300px] md:text-lg text-xl">
              Track your progress and motivate your efforts everyday.
            </p>
            <span className="inline-flex items-end gap-2">
              <span className="text-xl ">Learn more</span>
              <ArrowRight className="w-6 h-5 font-bold" />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Icon3 className="w-6 h-6" />
            <h3 className="font-bold md:text-xl text-2xl">
              Goal setting and tracking
            </h3>
            <p className="w-full md:max-w-[260px] max-w-[300px] md:text-lg text-xl">
              Set and track goals with manageable task breakdowns.
            </p>
            <span className="inline-flex items-end gap-2">
              <span className="text-xl ">Learn more</span>
              <ArrowRight className="w-6 h-5 font-bold" />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Icon2 className="w-6 h-6" />
            <h3 className="font-bold md:text-xl text-2xl">
              Secure data encryption
            </h3>
            <p className="w-full md:max-w-[260px] max-w-[300px] md:text-lg text-xl">
              Ensure your data’s safety with top-tier encryption.
            </p>
            <span className="inline-flex items-end gap-2">
              <span className="text-xl ">Learn more</span>
              <ArrowRight className="w-6 h-5 font-bold" />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Icon1 className="w-6 h-6" />
            <h3 className="font-bold md:text-xl text-2xl">
              Customizable notifications
            </h3>
            <p className="w-full md:max-w-[260px] max-w-[300px] md:text-lg text-xl">
              Get alerts on tasks and deadlines that matter most
            </p>
            <span className="inline-flex items-end gap-2">
              <span className="text-xl ">Learn more</span>
              <ArrowRight className="w-6 h-5 font-bold" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;
