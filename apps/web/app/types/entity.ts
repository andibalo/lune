export interface Product {
  id: string;
  sku: string;
  slug: string;
  name: string;
  description: string;
  price: number; 
  imageUrl?: string;
  stockQuantity: number;
  minimumOrderQuantity: number;
  categoryId: string;
  variantId?: string;
  isActive: boolean;
  featured: boolean;
  createdAt: string; 
  updatedAt: string; 

  categories: ProductCategory[]; 
  variant: ProductVariant[];
}


export interface Category {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string; 
  products: ProductCategory[];  
}

export interface ProductVariant {
  id: string;
  productId: string;
  imageUrl?: string;
  variantName: string;
  additionalPrice: number;
  createdAt: string; 
  updatedAt: string; 

  product: Product;
}

export interface ProductCategory {
  productId: string;
  categoryId: string;
  createdAt: string; 
  updatedAt: string; 

  product: Product;  
  category: Category; 
}