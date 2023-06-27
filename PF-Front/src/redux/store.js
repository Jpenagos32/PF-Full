import { configureStore } from "@reduxjs/toolkit";
import rooms from "./slices/roomSlice";
import roomTypes from "./slices/roomTypesSlice";
import bookingReducer from "./slices/bookingSlice";

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    roomTypes: roomTypes,
    booking: bookingReducer,
  },
});
