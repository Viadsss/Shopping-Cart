import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center bg-black">
      <div className="flex w-full max-w-screen-2xl justify-between px-24 pb-8 pt-16">
        <div className="flex flex-col gap-y-8 text-white">
          <div className="font-integral text-4xl uppercase">
            <Link to="/">Shop.Co</Link>
          </div>
          <p className="w-1/2 self-start text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            quisquam molestiae? Dignissimos, excepturi ipsum ipsam architecto
            alias vero voluptatem asperiores necessitatibus autem at voluptates
            veniam facilis obcaecati libero nobis eum. Eum, nesciunt nam fugit
            odio veritatis qui natus illum? Labore quisquam nobis eius quibusdam
            cupiditate sequi cumque veniam, recusandae, laudantium, tenetur ut
            magnam excepturi. Sequi vel repellat pariatur dolores atque.
          </p>
          <div className="flex items-center gap-x-2 text-black">
            <button className="ease flex h-8 w-8 items-center justify-center rounded-full bg-white transition duration-200 hover:-translate-y-1">
              <IconBrandX />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition duration-200 hover:-translate-y-1">
              <IconBrandFacebook />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition duration-200 hover:-translate-y-1">
              <IconBrandInstagram />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition duration-200 hover:-translate-y-1">
              <IconBrandGithub />
            </button>
          </div>
        </div>
        <div className="flex gap-x-32">
          <div>
            <div className="mb-4 font-satoshiBold text-xl uppercase text-white">
              Shop
            </div>
            <ul className="flex flex-col gap-y-4 text-gray-400">
              <li>
                <Link to="/shop/electronics">Electronics</Link>
              </li>
              <li>
                <Link to="/shop/jewelery">Jewelery</Link>
              </li>
              <li>
                <Link to="/shop/mens_clothing">Men's Clothing</Link>
              </li>
              <li>
                <Link to="/shop/womens_clothing">Women's Clothing</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="mb-4 font-satoshiBold text-xl uppercase text-white">
              Useful Links
            </div>
            <ul className="flex flex-col gap-y-4 text-gray-400">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <a href="https://github.com/Viadsss/Shopping-Cart">
                  Repository
                </a>
              </li>
              <li>
                <a href="https://bio.link/viads">My Socials</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center border-t border-gray-800 text-white">
        <div className="flex w-full max-w-screen-2xl justify-between px-24 py-5">
          <div className="text-sm text-gray-400">
            Shop.co © 2000-2024. All Rigths Reserved
          </div>
          <div className="font-satoshiBold">
            Project made by{" "}
            <a className="underline" href="https://bio.link/viads">
              Viads
            </a>{" "}
            using Fake Store API
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
