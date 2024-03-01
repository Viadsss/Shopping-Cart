import { Outlet } from "react-router-dom";
import { IProduct } from "../../utils/types";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Navigation from "./Navigation";

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
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col items-center font-satoshi">
      {isNavOpen && (
        <Navigation
          inputValue={inputValue}
          setInputValue={setInputValue}
          setSearchValue={setSearchValue}
          setIsNavOpen={setIsNavOpen}
        />
      )}
      <ToastContainer autoClose={1250} />
      <div className="h-2 w-full bg-black"></div>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSearchValue={setSearchValue}
        cartItems={cartItems}
        setIsNavOpen={setIsNavOpen}
      />
      <div className="w-full max-w-screen-2xl">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
