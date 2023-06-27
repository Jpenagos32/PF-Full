import { createSlice } from "@reduxjs/toolkit";

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    rooms: [],
    detail: {},
  },
  reducers: {
    getAllRooms: (state, action) => {
      state.rooms = action.payload;
    },
    getRoomById: (state, action) => {
      state.rooms = action.payload;
    },
  },
});

export const { getAllRooms, getRoomById } = roomsSlice.actions;
export default roomsSlice.reducer;
