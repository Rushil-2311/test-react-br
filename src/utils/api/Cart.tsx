import axios from "axios";
import { PRODUCTION_URL } from "../baseUrl";

export const getAllProductFromCart = async () => {
  try {
    const res = await axios.get(`${PRODUCTION_URL}/cart/getAllCart`);
    return res.data.pushObj;
  } catch (err: any) {
    console.log(err, "err");
  }
};

export const addProductToCart = async (productId: string) => {
  try {
    const res = await axios.post(
      `${PRODUCTION_URL}/cart/cartAdd/?productId=${productId}`
    );

    return res.data.obj;
  } catch (err: any) {
    console.log(err, "err");
  }
};

export const deleteProductFromCart = async (productId: string) => {
  try {
    const res = await axios.delete(
      `${PRODUCTION_URL}/cart/deleteFromCart/?productId=${productId}`
    );
    return res.data.filterproduct;
  } catch (err: any) {
    console.log(err, "err");
  }
};

export const decreseQuantity = async (productId: string) => {
  try {
    const res = await axios.get(
      `${PRODUCTION_URL}/cart/decreseQuantity/?productId=${productId}`
    );
    return res.data.products;
  } catch (err: any) {
    console.log(err, "err");
  }
};
