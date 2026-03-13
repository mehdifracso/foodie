"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <Link href="/">
        <div className="header-logo">
          Foodie
          <span>Restock your shop</span>
        </div>
      </Link>
      <Link href="/cart" className="cart-button">
        🛒
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </Link>
    </header>
  );
}
