import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-2 py-6">
        <span className="tag md:w-[12%] w-[18%]">Testimonials</span>
        <h1 className="font-bold text-4xl">What our users say</h1>
      </div>
      <div className="[mask-image:linear-gradient(to_bottom,transparent,black_50%)]">
        <div className="h-[600px] lg:h-auto overflow-y-scroll touch-auto scroll-smooth scrollbar-hide lg:px-28 px-16 pt-14 pb-24 flex item-center md:justify-between justify-center flex-wrap gap-y-5 gap-x-2">
          {testimonials.map(({ name, username, text, imageSrc }, index) => {
            return (
              <div
                key={index}
                className="lg:w-[320px] w-[325px] px-7 py-7 rounded-[20px] bg-white shadow-lg flex flex-col justify-between gap-3"
              >
                <p className="text-sm leading-tight">{text}</p>
                <span className="py-2 inline-flex items-center gap-2">
                  <Image src={imageSrc} alt={name} width={42} height={42} />
                  <div className="px-3">
                    <h6 className="text-sm leading-4 font-semibold">{name}</h6>
                    <h6 className="text-sm">{username}</h6>
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
