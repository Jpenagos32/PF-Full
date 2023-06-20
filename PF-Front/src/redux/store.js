import { configureStore } from "@reduxjs/toolkit";
import rooms from "./roomsSlice";
import roomTypes from "./roomTypesSlice";

export default configureStore({
    reducer: {
        rooms: rooms,
        roomTypes: roomTypes,
    },
});
