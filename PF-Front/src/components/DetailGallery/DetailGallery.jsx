import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Card, CardMedia, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function DetailGallery() {
  const room = useSelector((state) => state.types.types.image);
  console.log("inicial ", room);
  return (
    <div>
      {room &&
        room.map((image, index) => (
          <img key={index} src={image.bathrooms} alt={`Image ${index}`} />
        ))}
    </div>
  );
}
