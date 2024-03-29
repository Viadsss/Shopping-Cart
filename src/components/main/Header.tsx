import { Link, useNavigate } from "react-router-dom";
import { IconMenu2, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import { IProduct } from "../../utils/types";

interface Props {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  setSearchValue: (searchValue: string) => void;
  cartItems: IProduct[];
  setIsNavOpen: (isNavOpen: boolean) => void;
}

const Header: React.FC<Props> = ({
  inputValue,
  setInputValue,
  setSearchValue,
  cartItems,
  setIsNavOpen,
}) => {
  const navigate = useNavigate();

  const inputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue !== "") {
      navigate(`/shop/search?=${inputValue}`);
      setSearchValue(inputValue);
    }
  };

  const searchBtnClick = () => {
    if (inputValue !== "") {
      navigate(`/shop/search?=${inputValue}`);
      setSearchValue(inputValue);
    }
  };

  return (
    <div className="flex w-full items-center justify-between border-b px-8 py-3 shadow-lg md:px-16">
      <div className="font-integral text-3xl uppercase">
        <Link to="/">Shop.co</Link>
      </div>
      <div className="relative hidden items-center md:flex">
        <button
          className="absolute inset-y-0 left-0 pl-3"
          onClick={searchBtnClick}
        >
          <IconSearch />
        </button>
        <input
          className="rounded-full border bg-[#F0F0F0] py-1 pl-10 pr-4"
          type="search"
          placeholder="Search for products..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={inputEnter}
        />
      </div>
      <div className="hidden items-center gap-x-8 md:flex">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <div className="relative flex items-center gap-x-1">
            {cartItems.length ? cartItems.length : null}
            <div>
              <IconShoppingCart />
            </div>
            <div className="absolute -right-1/4 -top-1/4 flex items-center text-sm">
              {cartItems.length ? (
                <div className="relative flex items-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                </div>
              ) : null}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-x-8 md:hidden">
        <Link to="/cart">
          <div className="relative flex items-center gap-x-1">
            {cartItems.length ? cartItems.length : null}
            <div>
              <IconShoppingCart />
            </div>
            <div className="absolute -right-1/4 -top-1/4 flex items-center text-sm">
              {cartItems.length ? (
                <div className="relative flex items-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                </div>
              ) : null}
            </div>
          </div>
        </Link>
        <button onClick={() => setIsNavOpen(true)}>
          <IconMenu2 />
        </button>
      </div>
    </div>
  );
};

export default Header;
