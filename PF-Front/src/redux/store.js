import { configureStore } from "@reduxjs/toolkit";
import rooms from "./slices/roomSlice";
import roomTypes from "./slices/roomTypesSlice";
import bookingReducer from "./slices/bookingSlice";
import authSlice from "./slices/authSlice";

export default configureStore({
  reducer: {
    booking: bookingReducer,
    rooms: rooms,
    roomTypes: roomTypes,
    loginStatus: authSlice,
  },
});
