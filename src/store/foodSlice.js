import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  searchTerm: "",
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const foodActions = foodSlice.actions;
export const foodReducer = foodSlice.reducer;
