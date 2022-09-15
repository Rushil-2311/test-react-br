export interface CartItems {
  name: number;
  price: number;
  description: string;
  quantity: number;
  url: string;
  productId: number;
}

export interface Cart {
  products: Array<CartItems>;
}
