"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } =
    useCart();

  if (items.length === 0) {
    return (
      <main className="page">
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <p>Your cart is empty</p>
          <Link href="/">Browse categories →</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <h1 className="page-title">Your Cart</h1>
      <p className="page-subtitle">{items.length} item(s) ready to order</p>

      <div className="cart-items">
        {items.map((item) => (
          <div key={item.product.id} className="cart-item">
            <div className="product-emoji">{item.product.image}</div>
            <div className="cart-item-info">
              <div className="cart-item-name">{item.product.name}</div>
              <div className="cart-item-price">
                {item.product.price} MAD / {item.product.unit}
              </div>
            </div>
            <div className="cart-item-controls">
              <button
                className="qty-btn"
                onClick={() =>
                  updateQuantity(item.product.id, item.quantity - 1)
                }
              >
                −
              </button>
              <span className="cart-item-qty">{item.quantity}</span>
              <button
                className="qty-btn"
                onClick={() =>
                  updateQuantity(item.product.id, item.quantity + 1)
                }
              >
                +
              </button>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.product.id)}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        {items.map((item) => (
          <div key={item.product.id} className="cart-summary-row">
            <span>
              {item.product.name} × {item.quantity}
            </span>
            <span>{item.product.price * item.quantity} MAD</span>
          </div>
        ))}
        <div className="cart-total-row">
          <span>Total</span>
          <span>{totalPrice} MAD</span>
        </div>
        <button className="checkout-btn" onClick={() => alert("Order placed! Your supplier will be notified.")}>
          Place Order
        </button>
        <button className="clear-cart-btn" onClick={clearCart}>
          Clear cart
        </button>
      </div>
    </main>
  );
}
