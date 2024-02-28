import { Link, useNavigate } from "react-router-dom";
import { IconSearch, IconShoppingCart } from "@tabler/icons-react";
import { IProduct } from "./utils/types";

interface Props {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  setSearchValue: (searchValue: string) => void;
  cartItems: IProduct[];
}

const Header: React.FC<Props> = ({
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

  const searchBtnClick = () => {
    if (inputValue !== "") {
      navigate(`/shop/search?=${inputValue}`);
      setSearchValue(inputValue);
    }
  };

  return (
    <div className="flex w-full items-center justify-between border-b px-16 py-3 shadow-lg">
      <div className="font-integral text-3xl uppercase">
        <Link to="/">Shop.co</Link>
      </div>
      <div className="relative flex items-center">
        <button
          className="absolute inset-y-0 left-0 pl-3"
          onClick={searchBtnClick}
        >
          <IconSearch />
        </button>
        <input
          className="w-full rounded-full border bg-[#F0F0F0] py-1 pl-10 pr-4"
          type="search"
          placeholder="Search for products..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={inputEnter}
          size={50}
        />
      </div>
      <div className="flex items-center gap-x-8">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <div className="flex items-center gap-x-1">
            <span>{cartItems.length ? cartItems.length : null}</span>
            <IconShoppingCart />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
