import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductState, IProduct } from "../../interface/product";

const initialState: IProductState = {
  loading: false,
  product: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state: any, action: PayloadAction<IProduct[]>) {
      return {
        ...state,
        product: action.payload,
      };
    },
    addProduct(state: any, action: PayloadAction<IProduct>) {
      return {
        ...state,
        product: [...state.allUsers, action.payload],
      };
    },
    deleteProduct(state: any, action: PayloadAction<string>) {
      return {
        ...state,
      };
    },
  },
});

export const { getProducts, deleteProduct, addProduct } = productSlice.actions;

export default productSlice.reducer;
