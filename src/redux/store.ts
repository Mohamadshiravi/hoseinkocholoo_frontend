import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categories";
import productsReducer from "./slices/products";
import brandsReducer from "./slices/brands";
import userReducer from "./slices/user";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    brnads: brandsReducer,
    user: userReducer,
  },
});
store.subscribe(() => {
  console.log(store.getState());
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {todos : todoState}
export type AppDispatch = typeof store.dispatch;

export default store;
