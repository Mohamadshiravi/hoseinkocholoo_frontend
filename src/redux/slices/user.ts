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
  error: null | string;
}

const initialState: InitialState = {
  data: null,
  loading: true,
  favorites: null,
  error: null,
};

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
    const res = await authenticatedAxios.post("/favorites/add-to-favorites/", {
      product_id: id,
    });
    return res.data;
  }
);
export const deleteProductFromFavorites = createAsyncThunk(
  "user/deleteProductToFavorites",
  async (id: number) => {
    const res = await authenticatedAxios.post(
      "/favorites/remove-from-favorites/",
      {
        product_id: id,
      }
    );
    return res.data;
  }
);

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProductToFavorites.fulfilled, (_, action) => {
      if (action.payload.message) {
        SendSucToast(action.payload.message);
      }
    });
    builder.addCase(addProductToFavorites.rejected, (_) => {
      SendErrorToast("لطفا ابتدا وارد اکانت خود شوید");
    });
    builder.addCase(deleteProductFromFavorites.fulfilled, (_, action) => {
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
