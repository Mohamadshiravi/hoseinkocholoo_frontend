import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios/axios";
import ProductType from "../../types/products";

interface InitialState {
  offeredProducts: {
    data: ProductType[] | null;
    loading: boolean;
    error: null | string;
  };
  Products: {
    data: ProductType[] | null;
    loading: boolean;
    error: null | string;
  };
}

const initialState: InitialState = {
  offeredProducts: {
    data: [],
    loading: true,
    error: null,
  },
  Products: {
    data: [],
    loading: true,
    error: null,
  },
};

export const fetchOfferedProductsFromServer = createAsyncThunk(
  "products/fetchOfferedProductsFromServer",
  async () => {
    const res = await axiosInstance.get(
      "products/products/filtered?has_discount=true"
    );
    return res.data;
  }
);

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchOfferedProductsFromServer.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.offeredProducts.data = action.payload;
          state.offeredProducts.loading = false;
        }
      }
    );
    builder.addCase(fetchOfferedProductsFromServer.pending, (state) => {
      state.offeredProducts.error = null;
      state.offeredProducts.loading = true;
    });
  },
});

export default slice.reducer;
