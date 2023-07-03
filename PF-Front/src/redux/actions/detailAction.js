import axios from "axios";
import { fetchDatatype } from "../slices/detailSlice";
import { setLoading } from "../slices/LodingSlice";

const fakePromise = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

export const fetchRoomsType = (room_type) => {
  return async (dispatch) => {
    try {
      await fakePromise();
      const response = await axios.get(
        `https://pf-back-production-6a7d.up.railway.app/rooms/${room_type}`
      );
      const roomsData = response.data;
      dispatch(fetchDatatype(roomsData));
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
};
