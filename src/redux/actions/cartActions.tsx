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
    // Api call for register
    const response = values;
    if (response) {
      dispatch(getCartProducts(response));
    }
  };

export const addCartProductAction: any =
  (values: ICart) => async (dispatch: AppDispatch) => {
    // Api call for Add user

    const response = values;
    if (response) {
      dispatch(addCartProduct(response));
    }
  };

export const changeQuantityOfProductAction: any =
  (values: string) => async (dispatch: AppDispatch) => {
    // Api call for delete user
    const response = values;
    if (response) {
      dispatch(changeQuantityProduct(response));
    }
  };

export const deleteCartProductAction: any =
  (values: string) => async (dispatch: AppDispatch) => {
    // Api call for delete user
    const response = values;
    if (response) {
      dispatch(deleteCartProduct(response));
    }
  };
