import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categories";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
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
