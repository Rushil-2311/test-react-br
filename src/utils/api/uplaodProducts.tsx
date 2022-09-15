import firebase, { db } from "../../Firebase-global";

export const uploadProductToFirebase = async (file: any) => {
  let url = await firebase
    .storage()
    .ref("/images" + file.name)
    .put(file)
    .then((data) => {
      firebase
        .storage()
        .ref("/images" + file.name)
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          return url;
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
  return url;
};
