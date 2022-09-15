import "../../App.css";
import { useState, useEffect, FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { uploadProductToFirebase } from "../../utils/api/uplaodProducts";
import firebase from "../../../src/Firebase-global";
interface UploadImage {
  url: any;
  setUrl: any;
  selectedImage: any;
  setSelectedImage: any;
}

export default function UploadImage({
  url,
  setUrl,
  setSelectedImage,
  selectedImage,
}: UploadImage) {
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={(e: any) => {
          setSelectedImage(e.target.files[0]);
        }}
      />
      <label htmlFor="select-image">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      {imageUrl && selectedImage && (
        <Box mt={2} textAlign="center">
          <div>Image Preview:</div>
          <img src={imageUrl} alt={selectedImage.name} height="100px" />
        </Box>
      )}
    </>
  );
}
