import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios/axios";
import BrandType from "../../types/brandsType";

interface InitialState {
  loading: boolean;
  data: BrandType[] | null;
  error: null | string;
}

const initialState: InitialState = {
  data: null,
  loading: true,
  error: null,
};

export const fetchTopBrandsFromServer = createAsyncThunk(
  "brands/fetchTopBrandsFromServer",
  async () => {
    const res = await axiosInstance.get("products/brands");
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
        state.data = action.payload;
        state.loading = false;
      }
    });
    builder.addCase(fetchTopBrandsFromServer.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
  },
});

export default slice.reducer;
