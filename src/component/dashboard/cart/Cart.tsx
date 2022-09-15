import { Typography, Button } from "@material-ui/core";
import testImg from "../../../assets/images/img.jpg";
import CardMedia from "@mui/material/CardMedia";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import IndeterminateCheckBoxSharpIcon from "@mui/icons-material/IndeterminateCheckBoxSharp";
import ProductHeader from "../../Common/ProductHeader";
import {
  addProductToCart,
  decreseQuantity,
  deleteProductFromCart,
  getAllProductFromCart,
} from "../../../utils/api/Cart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartProducts } from "../../../redux/selectors/product";
import {
  addCartProductAction,
  deleteCartProductAction,
  getCartProductAction,
} from "../../../redux/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const [cost, setCost] = useState(0);
  const products = useSelector(getAllCartProducts);

  const allCartProduct = async () => {
    const cartProducts = await getAllProductFromCart();
    dispatch(getCartProductAction(cartProducts));
  };
  useEffect(() => {
    allCartProduct();
  }, []);
  const calculateTotalCost = (products: any) => {
    let total_cost: any = 0;
    if (products.length > 0) {
      products.forEach((doc: any) => {
        total_cost = total_cost + doc.price;
      });
    }
    return total_cost;
  };
  useEffect(() => {
    let value = calculateTotalCost(products);
    setCost(value);
  }, [products]);

  const removeToCart = async (id: string) => {
    const deleteCartProduct = await deleteProductFromCart(id);
    dispatch(deleteCartProductAction(deleteCartProduct));
    allCartProduct();
  };

  return (
    <>
      <ProductHeader />
      <div className="home">
        <div className="cart-main">
          {products.length &&
            products.map((data: any, key) => {
              return (
                <div className="cart" key={key}>
                  <CardMedia
                    component="img"
                    height="100px"
                    image={data?.url}
                    alt="testImg"
                    style={{ width: "150px", borderRadius: ".25rem" }}
                  />
                  <Typography>{data?.name}</Typography>
                  <Typography>{data?.description}</Typography>
                  <div style={{ display: "flex" }}>
                    <AddBoxSharpIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        addProductToCart(data?.id);
                        allCartProduct();
                      }}
                    />
                    <Typography style={{ margin: "0 5px" }}>
                      {data?.quantity}
                    </Typography>
                    <IndeterminateCheckBoxSharpIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        decreseQuantity(data?.id);
                        allCartProduct();
                      }}
                    />
                  </div>
                  <Typography>{data?.price}</Typography>
                  <DeleteIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => removeToCart(data?.id)}
                  />
                </div>
              );
            })}
        </div>
        <div className="filters summary">
          <Typography variant="h4">Subtotal</Typography>
          <Typography variant="h6" style={{ margin: "20px 0" }}>
            Total: ₹ {cost}
          </Typography>
          <Button size="medium" color="default" variant="contained">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
