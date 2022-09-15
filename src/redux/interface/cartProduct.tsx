export interface IAuthType {
  username: string;
  password: string;
  token: string;
}

export interface ICart {
  productId: string;
  quantity: number;
}
export interface IintitalState {
  loading: boolean;
  cartList: ICart[];
}
