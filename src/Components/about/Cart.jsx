/* eslint-disable react/prop-types */

import "../../Css/Cart.css";

const Cart = ({ items, onRemove }) => {
  return (
    <div className="cart-overlay">
      <h3>Your Cart</h3>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <div>
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => onRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
