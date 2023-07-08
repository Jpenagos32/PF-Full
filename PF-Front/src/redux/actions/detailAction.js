import axios from "axios";
import { fetchDatatype } from "../slices/detailSlice";
import { setLoading } from "../slices/LodingSlice";

const fakePromise = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

export const fetchRoomsType = (room_number) => {
  const roomwithnumber = +room_number;
  return async (dispatch) => {
    try {
      await fakePromise();
      const response = await axios.get(
        `/rooms?room_number=${roomwithnumber}`
      );
      const roomsData = response.data.filtered;
      dispatch(fetchDatatype(roomsData[0]));
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
};
