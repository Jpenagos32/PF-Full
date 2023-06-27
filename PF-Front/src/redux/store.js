import { configureStore } from "@reduxjs/toolkit";
import rooms from "./roomsSlice";
import roomTypes from "./roomTypesSlice";
import bookingReducer from "./bookingSlice";

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    roomTypes: roomTypes,
    booking: bookingReducer,
  },
});
