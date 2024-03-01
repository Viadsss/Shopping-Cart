import { IconSearch, IconX } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  setSearchValue: (searchValue: string) => void;
  setIsNavOpen: (isNavOpen: boolean) => void;
}

const Navigation: React.FC<Props> = ({
  inputValue,
  setInputValue,
  setSearchValue,
  setIsNavOpen,
}) => {
  const navigate = useNavigate();

  const inputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue !== "") {
      navigate(`/shop/search?=${inputValue}`);
      setSearchValue(inputValue);
      setIsNavOpen(false);
    }
  };

  const searchBtnClick = () => {
    if (inputValue !== "") {
      navigate(`/shop/search?=${inputValue}`);
      setSearchValue(inputValue);
      setIsNavOpen(false);
    }
  };

  return (
    <div className="absolute z-50 h-full w-full overflow-hidden backdrop-blur">
      <div className="animate-appear flex h-full w-1/2 flex-col rounded bg-white p-4">
        <button className="self-end" onClick={() => setIsNavOpen(false)}>
          <IconX />
        </button>
        <div className="relative my-4 flex items-center">
          <button
            className="absolute inset-y-0 left-0 pl-3"
            onClick={searchBtnClick}
          >
            <IconSearch />
          </button>
          <input
            className="w-full rounded-full border bg-[#F0F0F0] py-1 pl-10 pr-4"
            type="search"
            placeholder="Search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={inputEnter}
          />
        </div>
        <div className="flex flex-col gap-y-2 border-t-2 border-gray-200 pt-2">
          <Link to="/" onClick={() => setIsNavOpen(false)}>
            Home
          </Link>
          <Link to="/shop" onClick={() => setIsNavOpen(false)}>
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
