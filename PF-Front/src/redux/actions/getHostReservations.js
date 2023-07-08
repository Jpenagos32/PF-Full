import axios from "axios";
import { fetchReservesHost } from "../slices/reservation";


export const getReservation = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `/hosts`
            );
            const hostsData= response.data
            dispatch(fetchReservesHost(hostsData));
            console.log(hostsData)
            console.log(response)

        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };
};
