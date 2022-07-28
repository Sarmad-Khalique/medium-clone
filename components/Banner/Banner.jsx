import Image from "next/image";
import BannerImage from "../../static/banner.png";

const Banner = () => {
  return (
    <div className="bg-[#ffc017] h-[22rem] border-b border-black flex items-center justify-between">
      <div className="py-10 mx-auto w-full space-y-4 px-8">
        <h3 className="text-7xl font-bold font-serif">Stay Curious.</h3>
        <div className="text-lg w-5/6 text-[#292929]">
          Discover stories, thinking, and expertise from writers on any topic.
        </div>
        <button className="bg-[#191919] text-white rounded-full py-1 px-8">
          Start Reading
        </button>
      </div>
      <div className="relative hidden lg:block max-w-lg py-2 h-full overflow-hidden">
        <Image alt="banner" src={BannerImage} />
      </div>
    </div>
  );
};

export default Banner;
