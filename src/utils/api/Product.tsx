import axios from "axios";
import { Products } from "../../types/Product.types";
import { PRODUCTION_URL } from "../baseUrl";

export const getAllProducts = async () => {
  try {
    const res = await axios.get(`${PRODUCTION_URL}/product/getAll`);
    return res.data.products;
  } catch (err: any) {
    console.log(err, "err");
  }
};

export const addProduct = async (data: Products) => {
  try {
    const res = await axios.post(`${PRODUCTION_URL}/product/create`, {
      ...data,
    });
    return res.data.products;
  } catch (err: any) {
    console.log(err, "err");
  }
};
