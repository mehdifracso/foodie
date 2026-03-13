import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getCategory, products } from "@/lib/data";
import { ProductDetailActions } from "@/components/product-detail-actions";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProduct(params.id);
  if (!product) notFound();

  const category = getCategory(product.category);

  return (
    <main className="page">
      <Link href={`/category/${product.category}`} className="back-button">
        ← Back to {category?.name}
      </Link>

      <div className="product-detail">
        <div className="product-detail-hero">{product.image}</div>
        <div className="product-detail-body">
          <h1 className="product-detail-name">{product.name}</h1>
          <div className="product-detail-name-ar">{product.nameAr}</div>

          <div className="product-detail-price">
            {product.price} MAD
            <span className="product-unit"> / {product.unit}</span>
          </div>

          <div className="product-detail-meta">
            <div className="meta-item">
              <strong>Min order:</strong> {product.minOrder} {product.unit}
            </div>
            <div className="meta-item">
              <strong>Unit:</strong> {product.unit}
            </div>
          </div>

          <p className="product-detail-desc">{product.description}</p>

          <ProductDetailActions product={product} />
        </div>
      </div>
    </main>
  );
}
