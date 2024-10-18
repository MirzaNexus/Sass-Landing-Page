import Cube1 from "@/assets/cube-helix 1.png";
import Cube2 from "@/assets/cube-helix 2.png";
import Image from "next/image";
const EveryThingYouNeed = () => {
  return (
    <section className="md:p-16 py-10">
      <div className="w-full flex flex-col md:gap-5 gap-10 py-3">
        <div className="w- flex flex-col gap-4 items-center px-2 py-6">
          <span className="tag lg:w-[14%] md:w-[24%] w-[50%]">
            Everything you need
          </span>
          <div className="px-2 md:px-0">
            <h1 className=" w-[510px] md:w-[570px] h-[140px] tracking-tighter md:text-[60px] text-[53px] text-center font-bold bg-[linear-gradient(to_bottom,#000_25%,#001354)] text-transparent bg-clip-text leading-[65px]">
              Streamlined for easy management
            </h1>
          </div>
          <div className="px-3 md:px-0 ">
            <p className="w-[480px] md:w-[570px] md:h-[110px] md:text-[24px] text-[24px] leading-tighter font-semibold text-center">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </p>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-7 lg:py-5 md:py-10 py-2">
          <div className="lg:w-[40%] w-[80%] lg:h-full h-[600px] flex flex-col items-center py-5 px-2 rounded-2xl bg-white shadow-xl mb-5 md:mb-0 gap-5">
            <Image
              src={Cube1}
              alt="cube-1"
              className=" w-full object-contain lg:h-[329px] md:h-[400px] h-[350px] "
            />
            <div className="w-full max-w-[75%]">
              <h3 className="font-bold lg:text-2xl md:text-3xl text-2xl text-center mb-2">
                Integration ecosystem
              </h3>
              <p className="lg:text-lg text-xl text-center">
                Enhance your productivity by connecting with your favorite
                tools, keeping all your essentials in one place.
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] w-[80%] lg:h-full h-[600px] flex flex-col items-center py-7 px-2 rounded-2xl bg-white shadow-xl mb-5 md:mb-0">
            <Image
              src={Cube2}
              alt="cube-2"
              className=" w-full object-contain lg:h-[329px] md:h-[400px] h-[350px]"
            />
            <div className="w-full max-w-[75%]">
              <h3 className="font-bold lg:text-2xl md:text-3xl text-2xl text-center mb-2">
                Goal setting and tracking
              </h3>
              <p className="lg:text-lg text-xl text-center">
                Define and track your goals, breaking down objectives into
                achievable tasks to keep your targets in sight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveryThingYouNeed;
