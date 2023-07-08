import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reserves: [],
};
export const reservation = createSlice({
  name: "reserve",
  initialState,

  reducers: {
    fetchReservesHost: (state, action) => {
      state.reserves = action.payload;
    },
  },
});

export const { fetchReservesHost } = reservation.actions;
export default reservation.reducer;
