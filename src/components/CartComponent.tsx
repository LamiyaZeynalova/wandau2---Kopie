import React from "react";
import { FaTimes, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import {
  incrementQuantity,
  decrementQuantity,
  removeCart,
  toggleCart,
} from "../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

const CartComponent: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, price, cartOpen } = useSelector(
    (s: RootState) => s.productSlice
  );

  
  const close = () => dispatch(toggleCart(false));

  if (!cartOpen) return null;

  return (
    <>
     
      <div className="cart-overlay" onClick={close} />

      {/* Panel */}
      <aside
        className="cart-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <header className="cart-panel__header">
          <h2 className="cart-title">Your Cart</h2>
          <button
            className="cart-close"
            aria-label="Close cart"
            onClick={close}
            type="button"
          >
            <FaTimes />
          </button>
        </header>

        <div className="cart-panel__content">
          {cart.length === 0 ? (
            <div className="cart-empty">Your cart is empty</div>
          ) : (
            cart.map((item) => (
              <article className="cart-card" key={item._id}>
                <img
                  className="cart-card__img"
                  src={item.productImage}
                  alt={item.name}
                  width={68}
                  height={100}
                />

                <div className="cart-card__body">
                  <div className="cart-card__top">
                    <div className="cart-card__name">{item.name}</div>
                    <div className="cart-card__price">${item.price*item.quantity}</div>
                    <div className="cart-card__controls">
                      <button
                        className={`qty-btn`}
                        aria-label={`Decrease ${item.name}`}
                        onClick={() => dispatch(decrementQuantity(item._id))}
                        disabled={item.quantity === 1}
                      >
                        <FaMinus />
                      </button>

                      <div className="qty-count" aria-live="polite">
                        {item.quantity}
                      </div>

                      <button
                        className="qty-btn"
                        aria-label={`Increase ${item.name}`}
                        onClick={() => dispatch(incrementQuantity(item._id))}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  className="cart-card__delete"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => {
                    if (window.confirm("Delete this item?")) {
                      dispatch(removeCart(item._id));
                    }
                  }}
                  type="button"
                >
                  <FaTrash />
                </button>
              </article>
            ))
          )}
        </div>

        <footer className="cart-panel__footer">
          <div className="cart-total-row">
            <div className="cart-total-label">Total:</div>
            <div className="cart-total-value">${price.toFixed(2)}</div>
          </div>

          <button className="cart-btn cart-btn--primary" type="button">
            PLACE ORDER
          </button>

          <button
            className="cart-btn cart-btn--ghost"
            type="button"
            onClick={() => {
              close();
              navigate("/shop");
            }}
          >
            CONTINUE SHOPPING
          </button>
        </footer>
      </aside>
    </>
  );
};

export default CartComponent;
