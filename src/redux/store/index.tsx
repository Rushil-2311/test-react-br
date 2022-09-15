import { configureStore, Action } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import thunk, { ThunkAction } from "redux-thunk";
import { persistReducer } from "redux-persist";
import rootReducer, { RootState } from "../reducers/rootReducers/index";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
