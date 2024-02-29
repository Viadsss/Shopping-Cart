import { Outlet } from "react-router-dom";
import { IProduct } from "../../utils/types";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  setSearchValue: (searchValue: string) => void;
  cartItems: IProduct[];
}

const App: React.FC<Props> = ({
  inputValue,
  setInputValue,
  setSearchValue,
  cartItems,
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center font-satoshi">
      <div className="h-2 w-full bg-black"></div>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSearchValue={setSearchValue}
        cartItems={cartItems}
      />
      <div className="w-full max-w-screen-2xl">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
