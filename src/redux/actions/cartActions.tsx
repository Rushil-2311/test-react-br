import { AppDispatch } from "../store";
import { ICart } from "./../interface/cartProduct";
import {
  getCartProducts,
  addCartProduct,
  changeQuantityProduct,
  deleteCartProduct,
} from "../reducers/CartProducts";

export const getCartProductAction: any =
  (values: ICart[]) => async (dispatch: AppDispatch) => {
    const response = values;
    if (response) {
      dispatch(getCartProducts(response));
    }
  };

export const addCartProductAction: any =
  (values: ICart) => async (dispatch: AppDispatch) => {
    const response = values;
    if (response) {
      dispatch(addCartProduct(response));
    }
  };

export const deleteCartProductAction: any =
  (values: string) => async (dispatch: AppDispatch) => {
    const response = values;
    if (response) {
      dispatch(deleteCartProduct(response));
    }
  };
