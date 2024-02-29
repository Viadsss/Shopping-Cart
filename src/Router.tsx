import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import { IProduct } from "./utils/types";
import App from "./components/main/App";
import Shop from "./components/shop/Shop";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";

const Router = () => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const addToCart = (product: IProduct) => {
    const updatedCartItems = [...cartItems];
    const existingProductIndex = updatedCartItems.findIndex(
      (item) => item.id === product.id,
    );

    if (existingProductIndex !== -1) {
      updatedCartItems[existingProductIndex].quantity += 1;
    } else {
      updatedCartItems.push({ ...product, quantity: 1 });
    }

    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (id: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    setCartItems(updatedCartItems);
  };

  const removeCartItem = (id: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          inputValue={inputValue}
          setInputValue={setInputValue}
          setSearchValue={setSearchValue}
          cartItems={cartItems}
        />
      ),
      children: [
        { path: "shop", element: <Shop searchValue={searchValue} /> },
        { path: "shop/:category", element: <Shop searchValue={searchValue} /> },
        {
          path: "cart",
          element: (
            <Cart
              cartItems={cartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeCartItem={removeCartItem}
            />
          ),
        },
        { path: "product/:id", element: <Product addToCart={addToCart} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
