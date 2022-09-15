import { RootState } from "../reducers/rootReducers";

export const getProducts = (state: RootState) => state.productSlice.product;

export const getAllCartProducts = (state: RootState) =>
  state.CartProducts.cartList;
