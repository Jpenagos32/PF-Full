import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: [],
};

export const detailSlice = createSlice({
  name: "types",
  initialState,

  reducers: {
    fetchDatatype(state, action) {
      state.types = action.payload;
    },
  },
});

export const { fetchDatatype } = detailSlice.actions;
export default detailSlice.reducer;
