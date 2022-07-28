import Image from "next/image";
import Logo from "../../static/logo.png";

const Header = () => {
  return (
    <div className="px-8 py-4 border-b border-[#292929] bg-[#ffc017] sticky top-0">
      <div className="flex justify-between items-center">
        <div className="relative object-contain w-36 h-10">
          <Image alt="Logo" src={Logo} layout="fill" />
        </div>
        <div className="flex items-center justify-end text-sm space-x-4 px-2 whitespace-nowrap">
          <div>Our Story</div>
          <div>Membership</div>
          <div>Write</div>
          <div>Sign In</div>
          <button className="bg-black text-white rounded-full py-2 px-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
