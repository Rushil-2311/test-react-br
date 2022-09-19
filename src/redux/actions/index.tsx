import { AppDispatch } from "../store";
import { getProducts, addProduct, deleteProduct } from "../reducers/Products";
import { IProduct } from "../interface/product";

export const getProductAction: any =
  (values: IProduct[]) => async (dispatch: AppDispatch) => {
    const response = values;
    if (response) {
      dispatch(getProducts(response));
    }
  };
