import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  addCartProductAction,
  deleteCartProductAction,
  getCartProductAction,
} from "../../../redux/actions/cartActions";
import {
  addProductToCart,
  deleteProductFromCart,
  getAllProductFromCart,
} from "../../../utils/api/Cart";
import testImg from "../../../assets/images/img.jpg";

const ProductCard = ({ ele }: any) => {
  const { name, description, price, quantity, id, isInCart, url } = ele;
  const dispatch = useDispatch();

  const allCartProduct = async () => {
    const cartProducts = await getAllProductFromCart();
    dispatch(getCartProductAction(cartProducts));
  };

  const addToCart = async (id: string) => {
    const newCartProduct = await addProductToCart(id);
    dispatch(addCartProductAction(newCartProduct));
    allCartProduct();
  };

  const removeToCart = async (id: string) => {
    const deleteCartProduct = await deleteProductFromCart(id);
    dispatch(deleteCartProductAction(deleteCartProduct));
    allCartProduct();
  };

  return (
    <div>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="200"
          image={url || testImg}
          alt="testImg"
        />
        <CardContent>
          <Typography>{name}</Typography>
          <Typography>{description}</Typography>
          <Typography>{quantity}</Typography>
          <Typography>{price}</Typography>
          <Button
            type="submit"
            size="medium"
            color="primary"
            variant="contained"
            style={{ marginTop: "10px" }}
            onClick={() => {
              isInCart ? removeToCart(id) : addToCart(id);
            }}
          >
            {isInCart ? "Remove From Cart" : "Add to cart"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
