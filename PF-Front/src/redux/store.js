import { configureStore } from "@reduxjs/toolkit";
import rooms from "./slices/roomSlice";
import types from "./slices/detailSlice";
import roomTypes from "./slices/roomTypesSlice";
import bookingReducer from "./slices/bookingSlice";
import authSlice from "./slices/authSlice";
import loadingSlice from "./slices/LodingSlice";
import reservation from "./slices/reservation";

export default configureStore({
  reducer: {
    booking: bookingReducer,
    rooms: rooms,
    types: types,
    roomTypes: roomTypes,
    loginStatus: authSlice,
    loading: loadingSlice,
    reserve: reservation,
  },
});
