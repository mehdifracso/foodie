import Link from "next/link";
import { categories } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="page">
      <h1 className="page-title">Browse Categories</h1>
      <p className="page-subtitle">
        Find wholesale products for your shop
      </p>

      <div className="category-grid">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="category-card"
          >
            <div className="category-emoji">{cat.image}</div>
            <div className="category-name">{cat.name}</div>
            <div className="category-name-ar">{cat.nameAr}</div>
            <div className="category-count">{cat.productCount} products</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
