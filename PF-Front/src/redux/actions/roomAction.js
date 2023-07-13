import axios from "axios";
import { fetchData } from "../slices/roomSlice";
import { setLoading } from "../slices/LodingSlice";

const fakePromise = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

export const fetchRoomsData = () => {
  return async (dispatch) => {
    try {
      await fakePromise();
      const response = await axios.get(
        "/rooms"
      );
      const roomsData = response.data;
      dispatch(fetchData(roomsData));
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
};
