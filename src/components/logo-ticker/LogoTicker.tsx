import Logo1 from "@/assets/logo-acme.png";
import Logo2 from "@/assets/logo-apex.png";
import Logo3 from "@/assets/logo-celestial.png";
import Logo4 from "@/assets/logo-echo.png";
import Logo5 from "@/assets/logo-pulse.png";
import Logo6 from "@/assets/logo-quantum.png";
import Image from "next/image";
const LogoTicker = () => {
  return (
    <section className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
      <div className="w-full h-[132px] bg-white flex items-center justify-between gap-12 px-5">
        <Image src={Logo2} alt="logo-apex" className="logo" />
        <Image src={Logo1} alt="logo-acme" className="logo" />
        <Image src={Logo3} alt="logo-celestial" className="logo" />
        <Image src={Logo4} alt="logo-echo" className="logo" />
        <Image src={Logo5} alt="logo-pulse" className="logo" />
        <Image src={Logo6} alt="logo-quantum" className="logo" />
      </div>
    </section>
  );
};

export default LogoTicker;
