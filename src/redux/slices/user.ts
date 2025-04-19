import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authenticatedAxios from "../../utils/axios/authenticatedAxios";
import {
  SendErrorToast,
  SendSucToast,
} from "../../utils/helper/toastFunctions";
import ProductType from "../../types/products";

interface InitialState {
  loading: boolean;
  data: [] | null;
  favorites: ProductType[] | null;
  cart: ProductType[] | null;
  error: null | string;
}

const initialState: InitialState = {
  data: null,
  loading: true,
  favorites: null,
  cart: null,
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const res = await authenticatedAxios.get("/auth/get-me/");
    return res.data;
  }
);

export const fetchUserFavorites = createAsyncThunk(
  "user/fetchUserfavorites",
  async () => {
    const res = await authenticatedAxios.get("/favorites/favorites/");
    return res.data;
  }
);
export const addProductToFavorites = createAsyncThunk(
  "user/addProductToFavorites",
  async (id: number) => {
    const res = await authenticatedAxios.post(
      "/favorites/add/?return_product=true",
      {
        product_id: id,
      }
    );

    return res.data;
  }
);
export const deleteProductFromFavorites = createAsyncThunk(
  "user/deleteProductToFavorites",
  async (id: number) => {
    const res = await authenticatedAxios.post(
      "/favorites/remove/?return_product=true",
      {
        product_id: id,
      }
    );
    return res.data;
  }
);

export const toggleProductToCart = createAsyncThunk(
  "user/toggleProductToCart",
  async (payload: { variant_id: number; quantity: number }) => {
    console.log(payload);

    const res = await authenticatedAxios.post(
      "/cart/add/?return_product=true/",
      {
        variant_id: payload.variant_id,
        quantity: payload.quantity,
      }
    );
    console.log(res);
    return res.data;
  }
);

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.rejected, (state) => {
      state.error = "unauth";
      state.loading = false;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      console.log("data =>", action.payload);

      if (action.payload) {
        state.data = action.payload;
        state.loading = false;
      }
    });
    builder.addCase(fetchUserData.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(addProductToFavorites.fulfilled, (state, action) => {
      const currentFavorites = state.favorites;
      currentFavorites?.push(action.payload.product);

      state.favorites = currentFavorites;

      if (action.payload.message) {
        SendSucToast(action.payload.message);
      }
    });
    builder.addCase(addProductToFavorites.rejected, (_) => {
      SendErrorToast("لطفا ابتدا وارد اکانت خود شوید");
    });
    builder.addCase(deleteProductFromFavorites.fulfilled, (state, action) => {
      const newFavorites = state.favorites?.filter(
        (e) => e.id !== action.payload.product.id
      );
      if (newFavorites) {
        state.favorites = newFavorites;
      }

      if (action.payload.message) {
        SendSucToast(action.payload.message);
      }
    });
    builder.addCase(fetchUserFavorites.rejected, (state) => {
      state.error = "unauth";
      state.loading = false;
    });
    builder.addCase(fetchUserFavorites.fulfilled, (state, action) => {
      if (action.payload) {
        state.favorites = action.payload.favorites;
        state.loading = false;
      }
    });
    builder.addCase(fetchUserFavorites.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
  },
});

export default slice.reducer;
