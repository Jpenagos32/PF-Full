import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    adult: 0,
    child: 0,
    rooms: 0,
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
            state.rooms = action.payload;
        },
        chooseStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        chooseEndDate: (state, action) => {
            state.endDate = action.payload;
        },
    },
});

export const { countAdult, countChild, countRooms, chooseStartDate, chooseEndDate } = bookingSlice.actions;
export default bookingSlice.reducer;
