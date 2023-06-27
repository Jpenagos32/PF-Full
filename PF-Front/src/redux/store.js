import { configureStore } from "@reduxjs/toolkit";
import rooms from './slices/roomSlice'
import roomTypes from "./slices/roomTypesSlice";
import bookingReducer from './slices/bookingSlice'

export default configureStore({
    reducer: {
        booking: bookingReducer,
        rooms: rooms,
        roomTypes: roomTypes,
    },
});
