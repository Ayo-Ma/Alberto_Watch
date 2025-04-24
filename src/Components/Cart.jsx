import { useCart } from "./CartContext";
import "../Css/Cart.css";
import EmptyCartSVG from "./EmptyCartSVG";
import { MdAdd } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <EmptyCartSVG />
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <div className="quantity-price">
                <p className="price">
                  {" "}
                  <span className="dollar-mark">$ </span>
                  {Number(item.price).toFixed(2)}
                </p>
                <div className="cart-quantity">
                  <button onClick={() => updateQuantity(item.id, -1)}>
                    {" "}
                    <RiSubtractLine />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>
                    <MdAdd />
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>
          Total:
          <span className="light">${getTotalPrice().toFixed(2)}</span>
        </h3>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
