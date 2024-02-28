import { Link } from "react-router-dom";
import heroModel from "/imgs/Hero-Model.png";
import twinkleSmall from "/imgs/TwinkleSmall.png";
import twinkleBig from "/imgs/TwinkleBig.png";

const Hero = () => {
  return (
    <div className="flex bg-[#F2F0F1] px-16">
      <div className="basis-1/2 self-center">
        <h2 className="font-integral text-6xl tracking-wide">
          Find Prodcuts That Matches Your Style
        </h2>
        <p className="mb-6 mt-10 opacity-70">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <div className="mb-6 inline-block rounded-full bg-black px-10 py-3 text-white">
          <Link to="/shop">Shop Now</Link>
        </div>
        <div className="flex items-center divide-x-2 divide-gray-300">
          <div className="pr-8">
            <div className="font-satoshiBold text-3xl">200+</div>
            <div className="opacity-70">International Brands</div>
          </div>
          <div className="px-8">
            <div className="font-satoshiBold text-3xl">2,000+</div>
            <div className="opacity-70">High-Quality Products</div>
          </div>
          <div className="pl-8">
            <div className="font-satoshiBold text-3xl">30,000+</div>
            <div className="opacity-70">Happy Customers</div>
          </div>
        </div>
      </div>
      <div className="relative basis-1/2">
        <img src={twinkleSmall} className="absolute top-1/2" />
        <img src={twinkleBig} className="absolute right-0 top-1/4" />
        <img src={heroModel} />
      </div>
    </div>
  );
};

export default Hero;
