import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import Instagram from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";
import X from "@/assets/social-x.svg";
import Youtube from "@/assets/social-youtube.svg";
const Footer = () => {
  return (
    <div className="lg:p-5 w-full min-h-[333px] flex flex-col md:flex-row md:justify-between md:gap-0 gap-5 bg-black">
      <div className="-white lg:w-[25%] md:w-[33%] w-full flex flex-col justify-between md:gap-6">
        <div className="w-[100%] flex flex-col pl-4 py-5 ">
          <Image
            src={Logo}
            alt="website-logo"
            width={60}
            height={60}
            className="mb-3 object-contain h-[60px]"
          />
          <p className="w-[270px] text-sm text-slate-300">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website.
          </p>
        </div>
        <div className="flex item-center gap-3 pl-4 py-5">
          <Instagram className="w-6 h-6 text-slate-300" />
          <Linkedin className="w-6 h-6 text-slate-300" />
          <Pin className="w-6 h-6 text-slate-300" />
          <X className="w-6 h-6 text-slate-300" />
          <Youtube className="w-6 h-6 text-slate-300" />
        </div>
      </div>
      <div className=" flex md:flex-row flex-col lg:gap-24 md:gap-14 gap-10 md:py-5 md:pr-4 pl-4 pb-10">
        <div className="flex flex-col gap-4 ">
          <span className="text-white text-lg font-semibold">Product</span>
          <span className="text-slate-400 text-sm">Features</span>
          <span className="text-slate-400 text-sm">Integrations</span>
          <span className="text-slate-400 text-sm">Updates</span>
          <span className="text-slate-400 text-sm">FAQ</span>
          <span className="text-slate-400 text-sm">Pricing</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white text-lg font-semibold">Company</span>
          <span className="text-slate-400 text-sm">About</span>
          <span className="text-slate-400 text-sm">Blog</span>
          <span className="text-slate-400 text-sm">Careers</span>
          <span className="text-slate-400 text-sm">FAQ</span>
          <span className="text-slate-400 text-sm">Press</span>
          <span className="text-slate-400 text-sm">Contact</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white text-lg font-semibold">Resources</span>
          <span className="text-slate-400 text-sm">Examples</span>
          <span className="text-slate-400 text-sm">Community</span>
          <span className="text-slate-400 text-sm">Guides</span>
          <span className="text-slate-400 text-sm">Docs</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white text-lg font-semibold">Legal</span>
          <span className="text-slate-400 text-sm">Privacy</span>
          <span className="text-slate-400 text-sm">Terms</span>
          <span className="text-slate-400 text-sm">Security</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
