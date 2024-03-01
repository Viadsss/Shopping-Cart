import {
  IconArrowBigRightLines,
  IconMinus,
  IconPlus,
  IconTrashXFilled,
} from "@tabler/icons-react";
import hasDecimal from "../../utils/hasDecimal";
import { IProduct } from "../../utils/types";
import EmptyDisplay from "./EmptyDisplay";
import { toast } from "react-toastify";

interface Props {
  cartItems: IProduct[];
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeCartItem: (id: number) => void;
}

const Cart: React.FC<Props> = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
}) => {
  const subTotal = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  if (cartItems.length === 0) return <EmptyDisplay />;

  const notifyRemove = () => toast("Item removed from cart");
  const notifyCheckout = () => toast("Checking out the products");

  const handleRemoveCartItem = (itemId: number) => {
    removeCartItem(itemId);
    notifyRemove();
  };

  const handleCheckOut = () => {
    notifyCheckout();
  };

  return (
    <div className="h-full min-h-screen px-8 py-8 md:px-24">
      <div className="my-4 font-integral text-4xl uppercase tracking-wider">
        Your Cart
      </div>
      <div className="grid grid-rows-2 gap-4 rounded-lg p-4 lg:grid-cols-3">
        <div className="flex flex-col divide-y-2 rounded-lg border-2 border-slate-100 p-1 md:p-2 lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between gap-y-4 p-4 lg:flex-row"
            >
              <div className="flex">
                <div className="flex items-center justify-center p-6">
                  <img
                    className="aspect-square h-24 w-full object-contain"
                    src={item.image}
                  />
                </div>
                <div className="flex w-3/4 flex-col text-lg">
                  <div className="font-satoshiBold">{item.title}</div>
                  <div className="text-xs sm:text-sm">{item.description}</div>
                  <div className="mt-auto font-satoshiBold font-bold sm:text-xl">
                    $
                    {hasDecimal(item.price)
                      ? item.price.toFixed(2)
                      : item.price}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-x-2 lg:flex-col lg:items-end">
                <button onClick={() => handleRemoveCartItem(item.id)}>
                  <IconTrashXFilled className="text-red-500" />
                </button>
                <div className="mt-auto flex items-center justify-between rounded-full bg-gray-100 font-satoshiBold md:px-2 md:py-2">
                  <button
                    className="px-3"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <IconMinus size={16} stroke={3} />
                  </button>
                  <div className="px-2 text-sm">{item.quantity}</div>

                  <button
                    className="px-3"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <IconPlus size={16} stroke={3} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="flex flex-col rounded-lg border-2 border-slate-100 p-4">
            <div className="font-satoshiBold text-lg">Order Summary</div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="text-gray-400">Subtotal</div>
              <div className="font-satoshiBold">${subTotal}</div>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <div className="text-gray-400">Delivery Fee</div>
              <div className="font-satoshiBold">$0</div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t-2">
              <div>Total</div>
              <div className="font-satoshiBold text-lg">${subTotal}</div>
            </div>
            <button
              className="mt-4 flex  w-3/4  items-center justify-center gap-x-2 self-center rounded-full bg-black py-3 text-white"
              onClick={() => handleCheckOut()}
            >
              Go to Checkout
              <IconArrowBigRightLines />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
