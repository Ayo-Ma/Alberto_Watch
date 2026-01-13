import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "../Css/Cart.css";
import EmptyCartSVG from "./EmptyCartSVG";
import { MdAdd } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const formatMoney = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(Number(value));

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );


  const estShipping = subtotal > 500 ? 0 : 18;
  const estTax = subtotal * 0.045;
  const total = subtotal + estShipping + estTax;

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <main className="cart">
        <div className="cart__container">
          <div className="cart__empty">
            <EmptyCartSVG />
            <h1 className="cart__emptyTitle">Your bag is empty.</h1>
            <p className="cart__emptyText">
              Looks like you haven’t added anything yet. Start with a category and find your perfect watch.
            </p>
            <Link className="cart__emptyCta" to="/products">
              Browse watches
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cart">
      <div className="cart__container">
        <header className="cart__header">
          <div>
            <p className="cart__eyebrow">Your bag</p>
            <h1 className="cart__title">
              Review your order <span className="cart__count">({itemCount} items)</span>
            </h1>
            <p className="cart__subtitle">
              Update quantities, remove items, or proceed when you’re ready.
            </p>
          </div>

          <Link className="cart__back" to="/products">
            Continue shopping
          </Link>
        </header>

        <div className="cart__layout">
          <section className="cart__items" aria-label="Cart items">
            {cartItems.map((item) => {
              const lineTotal = Number(item.price) * item.quantity;

              return (
                <article key={item.id} className="cartItem">
                  <div className="cartItem__media">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>

                  <div className="cartItem__body">
                    <div className="cartItem__top">
                      <h3 className="cartItem__name">{item.name}</h3>

                      <button
                        className="cartItem__remove"
                        onClick={() => removeFromCart(item.id)}
                        type="button"
                        aria-label={`Remove ${item.name}`}
                        title="Remove"
                      >
                        <MdOutlineDelete />
                      </button>
                    </div>

                    <div className="cartItem__meta">
                      <span className="cartItem__unitPrice">{formatMoney(item.price)} each</span>
                      <span className="dot" aria-hidden="true">•</span>
                      <span className="cartItem__note">Free returns</span>
                    </div>

                    <div className="cartItem__bottom">
                      <div className="qty" aria-label={`Quantity for ${item.name}`}>
                        <button
                          className="qty__btn"
                          onClick={() => updateQuantity(item.id, -1)}
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <RiSubtractLine />
                        </button>

                        <span className="qty__value" aria-live="polite">
                          {item.quantity}
                        </span>

                        <button
                          className="qty__btn"
                          onClick={() => updateQuantity(item.id, 1)}
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <MdAdd />
                        </button>
                      </div>

                      <p className="cartItem__lineTotal">{formatMoney(lineTotal)}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          <aside className="summary" aria-label="Order summary">
            <div className="summary__card">
              <h2 className="summary__title">Order summary</h2>

              <div className="summary__rows">
                <div className="summary__row">
                  <span>Subtotal</span>
                  <span>{formatMoney(subtotal)}</span>
                </div>

                <div className="summary__row">
                  <span>Estimated shipping</span>
                  <span>{estShipping === 0 ? "Free" : formatMoney(estShipping)}</span>
                </div>

                <div className="summary__row">
                  <span>Estimated tax</span>
                  <span>{formatMoney(estTax)}</span>
                </div>

                <div className="summary__divider" />

                <div className="summary__row summary__row--total">
                  <span>Total</span>
                  <span>{formatMoney(total)}</span>
                </div>
              </div>

              <button className="summary__cta" type="button">
                Secure checkout
              </button>

              <p className="summary__micro">
                We’ll only ask for shipping details at checkout. Payments are encrypted.
              </p>

              <div className="summary__trust">
                <span>Fast delivery</span>
                <span className="dot" aria-hidden="true">•</span>
                <span>Free returns</span>
                <span className="dot" aria-hidden="true">•</span>
                <span>Support 24/7</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
