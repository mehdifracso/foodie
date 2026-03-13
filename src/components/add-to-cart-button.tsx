"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/types";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
}

export function AddToCartButton({ product, quantity }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, quantity ?? product.minOrder);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button
      className={`add-btn ${added ? "added-feedback" : ""}`}
      onClick={handleAdd}
    >
      {added ? "Added!" : "+ Add"}
    </button>
  );
}
