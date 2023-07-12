import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    adult: 1,
    child: 0,
    persons: 0,
    numberooms: 1,
    nights: 0,
    total: 0,
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
            state.numberooms = action.payload;
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
        calculateTotal: (state, action) => {
            state.total = action.payload;
        },
    },
});

export const { countAdult, countChild, countRooms, chooseStartDate, chooseEndDate, countNights, calculateTotal } = bookingSlice.actions;
export default bookingSlice.reducer;
