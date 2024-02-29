import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import { IProduct } from "../../utils/types";

interface Props {
  cartItems: IProduct[];
}

const ErrorPage: React.FC<Props> = ({ cartItems }) => {
  return (
    <div className="flex min-h-screen flex-col items-center font-satoshi">
      <div className="h-2 w-full bg-black"></div>
      <div className="flex w-full items-center justify-between border-b px-16 py-3 shadow-lg">
        <div className="font-integral text-3xl uppercase">
          <Link to="/">Shop.co</Link>
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
      <div className="grid h-full min-h-screen place-content-center">
        <div className="mb-5 flex flex-col items-center justify-center font-satoshiBold text-9xl">
          404<span className="text-5xl">NOT FOUND</span>
        </div>
        <div className="italic">The requested content has not been found.</div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
