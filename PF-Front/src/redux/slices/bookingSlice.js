import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    adult: 0,
    child: 0,
    persons: 0,
    numberooms: 0,
    nights: 0,
    startDate: null,
    endDate: null,
}

export const bookingSlice = createSlice({
    name: "booking",
    initialState,

    reducers: {
        countAdult: (state, action) => {
            state.adult = action.payload;
        },
        countChild: (state, action) => {
            state.child = action.payload;
        },
        countRooms: (state, action) => {
            state.room = action.payload;
        },
        chooseStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        chooseEndDate: (state, action) => {
            state.endDate = action.payload;
        },
        countNights: (state, action) => {
            state.nights = action.payload;
        },
    },
});

export const { countAdult, countChild, countRooms, chooseStartDate, chooseEndDate, countNights } = bookingSlice.actions;
export default bookingSlice.reducer;
