export interface Product {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  price: number;
  unit: string;
  minOrder: number;
  image: string;
  description: string;
}

export interface Category {
  slug: string;
  name: string;
  nameAr: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
