import React, { useEffect, useMemo } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../products/ProductCard";
import { getAllProducts } from "../../../utils/api/Product";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCartProducts,
  getProducts,
} from "../../../redux/selectors/product";

import { getProductAction } from "../../../redux/actions";
import ProductHeader from "../../Common/ProductHeader";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  const cartProducts = useSelector(getAllCartProducts);

  const AllProduct = async () => {
    const products = await getAllProducts();
    dispatch(getProductAction(products));
  };

  useEffect(() => {
    AllProduct();
  }, []);

  const checkProducts = useMemo(() => {
    return products.map((data: any) => {
      if (cartProducts.find((ele: any) => ele.id === data.id)) {
        return {
          ...data,
          isInCart: true,
        };
      } else {
        return {
          ...data,
          isInCart: false,
        };
      }
    });
  }, [cartProducts]);

  return (
    <div>
      <ProductHeader />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {checkProducts &&
          checkProducts?.map((ele: any) => {
            return (
              <Grid item xs={2} sm={3} md={3}>
                <ProductCard ele={ele} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Products;
