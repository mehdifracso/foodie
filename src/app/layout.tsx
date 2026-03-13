import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Foodie - Restock Your Shop",
  description:
    "Digital restocking platform for shop owners in Morocco. Browse wholesale products and restock easily.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
