import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Card, CardMedia, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function DetailGallery() {

  const room = useSelector((state) => state.types.types.image)
  const images = room && room ? room : {};
  const imageKeys = Object.keys(images);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (direction) => {
    if (direction === "prev") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? prevIndex : prevIndex - 1
      );
    } else if (direction === "next") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === imageKeys.length - 1 ? prevIndex : prevIndex + 1
      );
    }
  };

  const selectedImageKey = imageKeys[selectedImageIndex];
  const selectedImage = images[selectedImageKey];

  return (
    <Grid
      container
      sx={{
        margin: "20px",
      }}
    >
      <Grid item xs={12} sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="400"
          image={selectedImage}
          alt="Selected Image"
        />
        <IconButton
          onClick={() => handleImageClick("prev")}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          disabled={selectedImageIndex === 0}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          onClick={() => handleImageClick("next")}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          disabled={selectedImageIndex === imageKeys.length - 1}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
