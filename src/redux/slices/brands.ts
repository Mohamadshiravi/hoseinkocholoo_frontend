import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios/axios";
import BrandType from "../../types/brandsType";

interface InitialState {
  topBrands: {
    data: BrandType[] | null;
    loading: boolean;
    error: null | string;
  };
  allBrands: {
    data: BrandType[] | null;
    loading: boolean;
    error: null | string;
  };
}

const initialState: InitialState = {
  topBrands: {
    data: null,
    loading: true,
    error: null,
  },
  allBrands: {
    data: null,
    loading: true,
    error: null,
  },
};

export const fetchTopBrandsFromServer = createAsyncThunk(
  "brands/fetchTopBrandsFromServer",
  async () => {
    const res = await axiosInstance.get("products/brands/");
    return res.data;
  }
);
export const fetchAllBrandsFromServer = createAsyncThunk(
  "brands/fetchAllBrandsFromServer",
  async () => {
    const res = await axiosInstance.get("products/brands/");
    return res.data;
  }
);

const slice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopBrandsFromServer.fulfilled, (state, action) => {
      if (action.payload) {
        state.topBrands.data = action.payload;
        state.topBrands.loading = false;
      }
    });
    builder.addCase(fetchTopBrandsFromServer.pending, (state) => {
      state.topBrands.error = null;
      state.topBrands.loading = true;
    });
    builder.addCase(fetchAllBrandsFromServer.fulfilled, (state, action) => {
      if (action.payload) {
        state.allBrands.data = action.payload;
        state.allBrands.loading = false;
      }
    });
    builder.addCase(fetchAllBrandsFromServer.pending, (state) => {
      state.allBrands.error = null;
      state.allBrands.loading = true;
    });
  },
});

export default slice.reducer;
