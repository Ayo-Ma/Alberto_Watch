import { useCart } from "./CartContext";
import "../Css/Cart.css";
import EmptyCartSVG from "./EmptyCartSVG";

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
              <p>Price: ${Number(item.price).toFixed(2)}</p>
              <p>Total: ${(Number(item.price) * item.quantity).toFixed(2)}</p>
              <div className="cart-quantity">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Price:<span className="light">${getTotalPrice().toFixed(2)}</span></h3>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
