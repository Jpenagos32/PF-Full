import { configureStore } from "@reduxjs/toolkit";
import rooms from "./roomsSlice";
import roomTypes from "./roomTypesSlice";
import bookingReducer from './bookingSlice'

export default configureStore({
    reducer: {
        booking: bookingReducer,
        rooms: rooms,
        roomTypes: roomTypes,
    },
});
