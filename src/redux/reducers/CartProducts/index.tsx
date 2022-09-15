import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IintitalState, ICart } from "../../interface/cartProduct";

const initialState: IintitalState = {
  loading: false,
  cartList: [],
};

const cartSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    getCartProducts(state: any, action: PayloadAction<Array<ICart>>) {
      return {
        ...state,
        cartList: action.payload,
      };
    },
    addCartProduct(state: any, action: PayloadAction<ICart>) {
      return {
        ...state,
        cartList: action.payload,
      };
    },
    changeQuantityProduct(state: any, action: PayloadAction<string>) {
      return {
        ...state,
      };
    },
    deleteCartProduct(state: any, action: PayloadAction<string>) {
      return {
        ...state,
        cartList: action.payload,
      };
    },
  },
});

export const {
  getCartProducts,
  addCartProduct,
  changeQuantityProduct,
  deleteCartProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
