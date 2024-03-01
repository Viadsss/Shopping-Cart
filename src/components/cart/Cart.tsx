import {
  IconArrowBigRightLines,
  IconMinus,
  IconPlus,
  IconTrashXFilled,
} from "@tabler/icons-react";
import hasDecimal from "../../utils/hasDecimal";
import { IProduct } from "../../utils/types";

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

  if (cartItems.length === 0)
    return (
      <div className="h-full min-h-screen  px-24 py-8 outline outline-red-200">
        <div className="flex justify-center font-satoshiBold text-4xl">
          No items have been added to your cart yet 🛒
        </div>
      </div>
    );

  return (
    <div className="h-full min-h-screen  px-24 py-8 outline outline-red-200">
      <div className="my-4 font-integral text-4xl uppercase tracking-wider">
        Your Cart
      </div>
      <div className="grid grid-cols-3 gap-x-4 rounded-lg p-4">
        <div className="col-span-2 flex flex-col divide-y-2 rounded-lg border-2 border-slate-100 p-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between p-4">
              <div className="flex">
                <div className="flex items-center justify-center p-6">
                  <img
                    className="aspect-square h-24 w-full object-contain"
                    src={item.image}
                  />
                </div>
                <div className="flex w-3/4 flex-col text-lg">
                  <div className="font-satoshiBold">{item.title}</div>
                  <div className="text-sm">{item.description}</div>
                  <div className="mt-auto font-satoshiBold text-xl font-bold">
                    $
                    {hasDecimal(item.price)
                      ? item.price.toFixed(2)
                      : item.price}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <button onClick={() => removeCartItem(item.id)}>
                  <IconTrashXFilled className="text-red-500" />
                </button>
                <div className="mt-auto flex items-center justify-between rounded-full bg-gray-100 px-2 py-2 font-satoshiBold">
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
        <div className="col-span-1">
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
            <button className="mt-4 flex  w-3/4  items-center justify-center gap-x-2 self-center rounded-full bg-black py-3 text-white">
              Go to Checkout
              <IconArrowBigRightLines />
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <h2>Cart</h2>
    //   {cartItems.map((item) => (
    //     <div key={item.id}>
    //       <div>
    //         {item.title}
    //         <span> - Quantity: {item.quantity}</span>
    //       </div>
    //       <div>Price: ${(item.price * item.quantity).toFixed(2)}</div>
    //       <div>
    //         <button onClick={() => increaseQuantity(item.id)}>+</button>
    //         <button onClick={() => decreaseQuantity(item.id)}>-</button>
    //         <button onClick={() => removeCartItem(item.id)}>Remove</button>
    //       </div>
    //     </div>
    //   ))}
    //   <div>Subtotal: ${subTotal}</div>
    // </div>
  );
};

export default Cart;
