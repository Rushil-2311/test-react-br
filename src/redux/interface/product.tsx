export interface IProduct {
  name: number;
  price: number;
  description: string;
  quantity: number;
  url: string;
  productId: number;
}

export interface IProductState {
  loading: boolean;
  product: IProduct[];
}
