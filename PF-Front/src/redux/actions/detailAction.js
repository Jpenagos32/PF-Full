import axios from "axios";
import { fetchDatatype } from "../slices/detailSlice";

export const fetchRoomsType = (room_type) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://pf-back-production-6a7d.up.railway.app/rooms/${room_type}`
      );
      const roomsData = response.data;
      dispatch(fetchDatatype(roomsData));
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
};
