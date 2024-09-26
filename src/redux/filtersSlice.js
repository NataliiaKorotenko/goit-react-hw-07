import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilterValue: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setFilterValue } = filtersSlice.actions;

export const selectFilterValue = (state) => state.filters.name;

export const filtersReducer = filtersSlice.reducer;

