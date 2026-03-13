import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getProductsByCategory, categories } from "@/lib/data";
import { AddToCartButton } from "@/components/add-to-cart-button";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const products = getProductsByCategory(params.slug);

  return (
    <main className="page">
      <Link href="/" className="back-button">
        ← Back to categories
      </Link>

      <h1 className="page-title">
        {category.image} {category.name}
      </h1>
      <p className="page-subtitle">{category.nameAr}</p>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link
              href={`/product/${product.id}`}
              className="product-card-link"
            >
              <div className="product-emoji">{product.image}</div>
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-name-ar">{product.nameAr}</div>
                <div className="product-price">
                  {product.price} MAD
                  <span className="product-unit"> / {product.unit}</span>
                </div>
              </div>
            </Link>
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}
