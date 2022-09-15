import { combineReducers } from "@reduxjs/toolkit";

import CartProducts from "../CartProducts/index";
import productSlice from "../Products/index";

const rootReducer = combineReducers({
  CartProducts,
  productSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
