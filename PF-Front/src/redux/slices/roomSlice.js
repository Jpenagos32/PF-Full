import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
};

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,

  reducers: {
    fetchData(state, action) {
      state.rooms = action.payload;
    },
  },
});

export const { getAllRooms, getRoomById, fetchData } = roomsSlice.actions;
export default roomsSlice.reducer;
