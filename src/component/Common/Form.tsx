import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import { FormTextField } from "./Field";
import * as yup from "yup";
import "../../App.css";
import UploadImage from "./UploadImage";
import { useState } from "react";
import { addProduct, getAllProducts } from "../../utils/api/Product";
import firebase from "../../Firebase-global";
import { getProductAction } from "../../redux/actions";
import { useDispatch } from "react-redux";
interface FormValues {
  name: string;
  price: number;
  description: string;
  quantity: number;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  description: yup.string().required("Required"),
  quantity: yup.string().required("Required"),
  price: yup.string().required("Required"),
});

export default function MyForm({ setOpen }: any) {
  const dispatch = useDispatch();
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const AllProduct = async () => {
    const products = await getAllProducts();
    dispatch(getProductAction(products));
  };
  return (
    <Container maxWidth="md">
      <Box mb={3} p={2}>
        <Typography
          align="center"
          variant="h5"
          style={{ lineHeight: 1.25, marginBottom: 16 }}
        >
          Add New Product
        </Typography>
      </Box>
      <Formik
        initialValues={{
          name: "",
          description: "",
          quantity: 1,
          price: 200,
        }}
        validationSchema={validationSchema}
        onSubmit={async (
          values: FormValues,
          formikHelpers: FormikHelpers<FormValues>
        ) => {
          setLoading(true);
          if (selectedImage === null) {
            let data = await addProduct({ ...values, url: "" });
            if (data) {
              AllProduct();
              setOpen(false);
              setLoading(false);
            } else {
              AllProduct();
              setOpen(false);
              setLoading(false);
            }
          } else {
            firebase
              .storage()
              .ref("/images" + selectedImage.name)
              .put(selectedImage)
              .then((data) => {
                firebase
                  .storage()
                  .ref("/images" + selectedImage.name)
                  .getDownloadURL()
                  .then(async (url) => {
                    let data = await addProduct({ ...values, url });
                    if (data) {
                      AllProduct();
                      setOpen(false);
                      setLoading(false);
                    } else {
                      AllProduct();
                      setOpen(false);
                      setLoading(false);
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                    setLoading(false);
                  });
              })
              .catch((err) => {
                console.log(err);
                setLoading(false);
              });
          }
          formikHelpers.setSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form noValidate autoComplete="off">
            <Grid container spacing={2} xs={12}>
              <Grid item xs={12}>
                <Field
                  name="name"
                  label="Product Name"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="description"
                  label="Description"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="quantity"
                  label="Quantity"
                  type="number"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="price"
                  label="Unit Price"
                  type="number"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <UploadImage
                  url={url}
                  setUrl={setUrl}
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  size="large"
                  color="primary"
                  disabled={formikProps.isSubmitting}
                >
                  {loading ? "Loading..." : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
