import axios from "axios";
import { fetchData } from "../slices/roomSlice";

export const fetchRoomsData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://pf-back-production-6a7d.up.railway.app/rooms"
      );
      const roomsData = response.data;
      dispatch(fetchData(roomsData));
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
};
