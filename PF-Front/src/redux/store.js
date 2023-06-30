import { configureStore } from "@reduxjs/toolkit";
import rooms from "./slices/roomSlice";
import roomTypes from "./slices/roomTypesSlice";
import types from "./slices/detailSlice";
import bookingReducer from "./slices/bookingSlice";

export default configureStore({
  reducer: {
    booking: bookingReducer,
    rooms: rooms,
    roomTypes: roomTypes,
    types: types,
  },
});
