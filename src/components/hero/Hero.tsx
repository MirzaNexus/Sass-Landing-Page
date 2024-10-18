import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Cog from "@/assets/cog.png";
import Cylinder from "@/assets/cylinder.png";
import Noodle from "@/assets/noodle.png";
const Hero = () => {
  return (
    <section className="w-full pb-6 pt-2 overflow-x-clip bg-[#EAEEFE] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#eaeefe_66%)]">
      <div className="flex md:flex-row flex-col items-center md:justify-between  ">
        <div className="flex flex-col gap-10 p-6 ">
          <p className="tag">Version 2.0 is here</p>
          <h1 className="lg:w-[530px] w-[400px] lg:h-[220px] h-[190px] md:leading-[80px] tracking-tight text-[4.6rem] lg:text-8xl font-bold bg-[linear-gradient(to_bottom,#000_25%,#001354)] text-transparent bg-clip-text leading-tight">
            Pathway to productivity
          </h1>
          <p className="lg:w-[530px] w-[430px] lg:text-[24px] text-[23px] leading-tight font-semibold">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="flex items-center gap-4">
            <button className="button-primary">Get for free</button>
            <span className="inline-flex items-end gap-2">
              <span className="text-xl font-semibold">Learn more</span>
              <ArrowRight className="w-6 h-5 font-semibold" />
            </span>
          </div>
        </div>
        <div className="md:flex-1 relative md:h-[648px] px-2 md:p-0 ">
          <Image
            src={Cog}
            alt="Cog"
            className="w-auto lg:w-full md:absolute mt-16 mb-12 md:m-0 object-contain h-[28rem] md:h-full md:max-w-none"
          />
          <Image
            src={Cylinder}
            alt="Cog"
            className="w-52 h-52 absolute lg:-top-3 lg:-left-[5rem] right-[13.8rem] hidden md:block "
          />
          <Image
            src={Noodle}
            alt="Cog"
            className="w-52 h-52 absolute -bottom-[75px] -right-6 rotate-[30deg] hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
