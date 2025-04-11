import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios/axios";
import ProductType from "../../types/products";

interface InitialState {
  loading: boolean;
  data: {
    offeredProducts: ProductType[] | null;
    Products: ProductType[] | null;
  };
  error: null | string;
}

const initialState: InitialState = {
  data: {
    offeredProducts: null,
    Products: null,
  },
  loading: true,
  error: null,
};

export const fetchOfferedProductsFromServer = createAsyncThunk(
  "offeredProducts/fetchOfferedProductsFromServer",
  async () => {
    const res = await axiosInstance.get(
      "products/products/filtered?has_discount=true"
    );
    return res.data;
  }
);

const slice = createSlice({
  name: "offeredProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchOfferedProductsFromServer.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.data.offeredProducts = action.payload;
          state.loading = false;
        }
      }
    );
    builder.addCase(fetchOfferedProductsFromServer.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
  },
});

export default slice.reducer;
