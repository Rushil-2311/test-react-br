import { Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { getAllProductFromCart } from "../../utils/api/Cart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartProducts } from "../../redux/selectors/product";
import { getCartProductAction } from "../../redux/actions/cartActions";
import { useState } from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import MyForm from "./Form";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ProductHeader = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const products = useSelector(getAllCartProducts);

  const allCartProduct = async () => {
    const cartProducts = await getAllProductFromCart();
    dispatch(getCartProductAction(cartProducts));
  };

  useEffect(() => {
    allCartProduct();
  }, []);

  const visitToCart = () => {
    products.length ? navigate("/cart") : navigate("/dashboard");
  };
  return (
    <Typography variant="h5" className="product-header">
      <span
        onClick={() => navigate("/dashboard")}
        style={{ cursor: "pointer" }}
      >
        Shopping Cart
      </span>
      <Typography onClick={handleOpen} style={{ cursor: "pointer" }}>
        Add Product
      </Typography>
      <div onClick={() => visitToCart()} className="main_logo">
        <ShoppingCartIcon
          fontSize="large"
          style={{ marginRight: "20px", cursor: "pointer" }}
        />
        <div className="circle">{products.length}</div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <MyForm setOpen={setOpen} />
          </Box>
        </Fade>
      </Modal>
    </Typography>
  );
};

export default ProductHeader;
