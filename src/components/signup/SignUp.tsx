import ArrowRight from "@/assets/arrow-right.svg";
import Star from "@/assets/star.png";
import Spring from "@/assets/spring.png";
import Image from "next/image";
const SignUp = () => {
  return (
    <div className="relative w-full md:h-[472px] h-[422px] bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] flex items-center justify-center">
      <div className="py-12 px-8 flex flex-col items-center justify-center gap-7">
        <span className="text-center md:text-5xl text-4xl font-bold tracking-tighter">
          Sign up for free today
        </span>
        <p className="md:w-[490px] w-[430px] text-[16px] leading-tight text-center mb-3">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className="flex items-center gap-4">
          <button className="button-primary">Get for free</button>
          <span className="inline-flex items-end gap-2">
            <span className="text-xl font-semibold">Learn more</span>
            <ArrowRight className="w-6 h-5 font-semibold" />
          </span>
        </div>
      </div>
      <Image
        src={Star}
        alt="Star-Image"
        className="absolute lg:inset-0 top-0 -left-48 w-[362px] h-[362px] md:block hidden"
      />
      <Image
        src={Spring}
        alt="Spring-Image"
        className="absolute bottom-0 lg:right-0 -right-36 w-[362px] h-[362px] md:block hidden"
      />
    </div>
  );
};

export default SignUp;
