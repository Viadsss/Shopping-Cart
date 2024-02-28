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

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>
            {item.title}
            <span> - Quantity: {item.quantity}</span>
          </div>
          <div>Price: ${(item.price * item.quantity).toFixed(2)}</div>
          <div>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => removeCartItem(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div>Subtotal: ${subTotal}</div>
    </div>
  );
};

export default Cart;
