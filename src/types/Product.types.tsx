export interface Products {
  name: string;
  price: number;
  description: string;
  quantity: number;
  url: string;
}

export interface ProductList {
  products: Array<Products>;
}
