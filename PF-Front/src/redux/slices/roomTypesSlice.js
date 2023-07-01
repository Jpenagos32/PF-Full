import { createSlice } from "@reduxjs/toolkit";

export const roomTypesSlice = createSlice({
  name: "roomTypes",
  initialState: {
    roomTypes: [],
  },
  reducers: {
    getAllRoomTypes: (state, action) => {
      state.roomTypes = action.payload;
    },
    getRoomTypeById: (state, action) => {
      state.roomTypes = action.payload;
    },
  },
});

export const { getAllRoomTypes, getRoomTypeById } = roomTypesSlice.actions;
export default roomTypesSlice.reducer;
