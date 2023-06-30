import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRoomsType } from "../../redux/actions/detailAction";
import DetailGallery from "../../components/DetailGallery/DetailGallery";
import LinearColor from "../../components/Linearcolor";
import { useSelector } from "react-redux";

export default function Detail() {
  const { room_type } = useParams();
  const dispatch = useDispatch();
  const room = useSelector((state) => state.types.types.image);

  useEffect(() => {
    dispatch(fetchRoomsType(room_type));
  }, [dispatch, room_type]);

  console.log("inicial", room);
  return (
    <div>
      <DetailGallery />
      <LinearColor />
    </div>
  );
}
