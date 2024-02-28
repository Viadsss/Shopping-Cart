import { Link, Outlet, useNavigate } from "react-router-dom";
import { IProduct } from "./utils/types";
import {
  IconMoonStars,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";

interface Props {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  setSearchValue: (searchValue: string) => void;
  cartItems: IProduct[];
}

const Home: React.FC<Props> = ({
  inputValue,
  setInputValue,
  setSearchValue,
  cartItems,
}) => {
  const navigate = useNavigate();

  const inputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue !== "") {
      navigate(`/shop/search?=${inputValue}`);
      setSearchValue(inputValue);
    }
  };

  return (
    <div className="font-satoshi flex min-h-screen flex-col items-center">
      <div className="h-2 w-full bg-black"></div>
      <div className="w-full max-w-screen-2xl px-8 outline outline-red-200">
        <div className="flex items-center justify-between py-2">
          <div className="font-integral text-3xl uppercase">
            <Link to="/">Shop.co</Link>
          </div>
          <div className="relative flex items-center">
            <button className="absolute inset-y-0 left-0 pl-3">
              <IconSearch />
            </button>
            <input
              className="w-full rounded-full border bg-[#F0F0F0] py-1 pl-10 pr-4"
              type="search"
              placeholder="Search for products..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={inputEnter}
              size={40}
            />
          </div>
          <div className="flex items-center gap-x-8">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/shop">Shop</Link>
            </div>
            <div>
              <Link to="/cart">
                <div className="flex items-center gap-x-1">
                  <span>{cartItems.length ? cartItems.length : null}</span>
                  <IconShoppingCart />
                </div>
              </Link>
            </div>
            <IconMoonStars />
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Home;
