import { Link } from "react-router-dom";
import heroModel from "/imgs/Hero-Model.png";
import twinkleSmall from "/imgs/TwinkleSmall.png";
import twinkleBig from "/imgs/TwinkleBig.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center bg-[#F2F0F1] px-4 pt-8 lg:flex-row lg:px-16">
      <div className="basis-7/12 self-center">
        <h2 className="text-balance text-center font-integral text-4xl tracking-wide md:text-5xl lg:text-left lg:text-6xl">
          Find Products That Matches Your Style
        </h2>
        <p className="mb-6 mt-10 text-center opacity-70 lg:text-left">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link
          to="/shop"
          className="mx-20 mb-6 flex items-center justify-center rounded-full bg-black px-10 py-3 text-center text-white lg:mx-0 lg:inline-block"
        >
          Shop Now
        </Link>
        <div className="flex justify-center divide-x-2 divide-gray-300 lg:justify-start">
          <div className="pr-2 md:pr-8">
            <div className="font-satoshiBold text-2xl lg:text-3xl">200+</div>
            <div className="text-sm opacity-70">International Brands</div>
          </div>
          <div className="px-2 md:px-8">
            <div className="font-satoshiBold text-2xl lg:text-3xl">2,000+</div>
            <div className="text-sm opacity-70">High-Quality Products</div>
          </div>
          <div className="pl-2 md:pl-8">
            <div className="font-satoshiBold text-2xl lg:text-3xl">30,000+</div>
            <div className="text-sm opacity-70">Happy Customers</div>
          </div>
        </div>
      </div>
      <div className="relative basis-auto">
        <img src={twinkleSmall} className="absolute top-1/2 w-7 lg:w-14" />
        <img src={twinkleBig} className="absolute right-0 top-1/4" />
        <img src={heroModel} />
      </div>
    </div>
  );
};

export default Hero;
