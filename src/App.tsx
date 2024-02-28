import { Outlet, useOutlet } from "react-router-dom";
import { IProduct } from "./utils/types";
import Hero from "./Hero";
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
  const hasOutlet = useOutlet();

  return (
    <div className="font-satoshi flex min-h-screen flex-col items-center">
      <div className="h-2 w-full bg-black"></div>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSearchValue={setSearchValue}
        cartItems={cartItems}
      />
      <div className="w-full max-w-screen-2xl">
        {!hasOutlet ? <Hero /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
