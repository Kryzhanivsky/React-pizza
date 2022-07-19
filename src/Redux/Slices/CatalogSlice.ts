import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICatalogState, IPopupParams, IReceivedCatalogData } from "../interfaces&types";
import axios from "axios";

const initialState: ICatalogState = {
  amount: 0,
  items: [],
  isLoading: false,
  error: "",
  currentPage: 1,
  activeCategory: 0,
  searchValue: "",
  sortParam: { param: "popularity (ASC)", value: "rating", order:"asc" },
};

export const fetchItems = createAsyncThunk<IReceivedCatalogData, undefined, {state: {catalog: ICatalogState}}>(
  "catalog/fetchItems",
  async (_, {getState}) => {

    const response = await axios.get(
      `https://62a08573a9866630f8112416.mockapi.io/items`, {
        params: {
          limit: 12,
          page: getState().catalog.currentPage,
          sortBy: getState().catalog.sortParam.value,
          order: getState().catalog.sortParam.order,
          // category: getState().catalog.activeCategory,
          title: getState().catalog.searchValue,
        }
      }
    );

    return response.data as IReceivedCatalogData;
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<number>) {
      state.activeCategory = action.payload;
    },
    setSortParam(state, action: PayloadAction<IPopupParams>) {
      state.sortParam = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.amount = action.payload.amount;
        state.isLoading = false;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
      });
  },
});

export const { setActiveCategory, setSortParam, setSearchValue, setCurrentPage } = catalogSlice.actions;
export default catalogSlice.reducer;
