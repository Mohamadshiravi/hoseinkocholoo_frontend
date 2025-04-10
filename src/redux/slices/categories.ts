import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CategoriesType from "../../types/categories";
import axiosInstance from "../../utils/axios/axios";

interface categoryState {
  loading: boolean;
  data: CategoriesType[] | null;
  error: null | string;
}

const initialState: categoryState = {
  data: null,
  loading: true,
  error: null,
};

export const fetchCategoriesFromServer = createAsyncThunk(
  "categories/fetchCategoriesFromServer",
  async () => {
    const res = await axiosInstance.get("products/categories/");
    return res.data;
  }
);

const slice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesFromServer.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload;
        state.loading = false;
      }
    });
    builder.addCase(fetchCategoriesFromServer.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
  },
});

export default slice.reducer;
