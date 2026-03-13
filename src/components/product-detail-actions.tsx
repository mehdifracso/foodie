"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/types";

export function ProductDetailActions({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(product.minOrder);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <div className="quantity-selector">
        <button
          className="qty-btn"
          onClick={() => setQuantity((q) => Math.max(product.minOrder, q - 1))}
        >
          −
        </button>
        <span className="qty-value">{quantity}</span>
        <button
          className="qty-btn"
          onClick={() => setQuantity((q) => q + 1)}
        >
          +
        </button>
        <span className="product-unit">
          {product.unit} × {product.price} MAD
        </span>
      </div>

      <button
        className={`add-to-cart-full ${added ? "added-feedback" : ""}`}
        onClick={handleAdd}
      >
        {added
          ? "Added to cart!"
          : `Add to cart — ${quantity * product.price} MAD`}
      </button>
    </>
  );
}
