import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios/axios";
import ProductType from "../../types/products";

interface InitialState {
  offeredProducts: {
    data: ProductType[] | null;
    loading: boolean;
    error: null | string;
  };
  products: {
    data: ProductType[] | null;
    loading: boolean;
    error: null | string;
  };
  sortedByDiscount: {
    data:
      | {
          id: number;
          name: string;
          products: ProductType[];
        }[]
      | null;
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
  products: {
    data: [],
    loading: true,
    error: null,
  },
  sortedByDiscount: {
    data: null,
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

export const fetchAllProductsFromServer = createAsyncThunk(
  "products/fetchAllProductsFromServer",
  async () => {
    const res = await axiosInstance.get("products/products");
    return res.data;
  }
);

export const fetchSortedProductByDiscountFromServer = createAsyncThunk(
  "products/fetchSortedProductByDiscountFromServer",
  async () => {
    const res = await axiosInstance.get(
      "products/products/discounts/?format=json"
    );
    console.log(res.data);

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
    builder.addCase(fetchAllProductsFromServer.fulfilled, (state, action) => {
      if (action.payload) {
        state.products.data = action.payload;
        state.products.loading = false;
      }
    });
    builder.addCase(fetchAllProductsFromServer.pending, (state) => {
      state.products.error = null;
      state.products.loading = true;
    });
    builder.addCase(
      fetchSortedProductByDiscountFromServer.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.sortedByDiscount.data = action.payload;
          state.sortedByDiscount.loading = false;
        }
      }
    );
    builder.addCase(fetchSortedProductByDiscountFromServer.pending, (state) => {
      state.sortedByDiscount.error = null;
      state.sortedByDiscount.loading = true;
    });
  },
});

export default slice.reducer;
