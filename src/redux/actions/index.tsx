import { AppDispatch } from "../store";
import { getProducts, addProduct, deleteProduct } from "../reducers/Products";
import { IProduct } from "../interface/product";

export const getProductAction: any =
  (values: IProduct[]) => async (dispatch: AppDispatch) => {
    // Api call for register
    const response = values;
    if (response) {
      dispatch(getProducts(response));
    }
  };

export const addProductAction: any =
  (values: IProduct) => async (dispatch: AppDispatch) => {
    // Api call for Add user
    const response = values;
    if (response) {
      dispatch(addProduct(response));
    }
  };

export const deleteProductAction: any =
  (values: string) => async (dispatch: AppDispatch) => {
    // Api call for delete user
    const response = values;
    if (response) {
      dispatch(deleteProduct(response));
    }
  };
