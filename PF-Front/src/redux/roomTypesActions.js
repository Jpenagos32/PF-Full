import axios from "axios";
import { getAllRoomTypes, getRoomTypeById } from "./roomTypesSlice";

export const getRoomTypes = () => async (dispatch) => {
    const URL = "mongo.db";
    try {
        const dbResponse = await axios(URL);
        const roomTypes = dbResponse.data.EXAMPLE;
        dispatch(getAllRoomTypes(roomTypes));
    } catch (error) {
        console.log(error);
    }
};
