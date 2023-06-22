import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

export default function CardRoom(props) {
  return (
    <Card>
      <Link to="/detail">
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt="Paella dish"
        />
      </Link>
      <CardContent>
        <Typography variant="h5" sx={{ mt: 1.5 }}>
          {props.name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Facilities</Typography>
        <Typography sx={{ mt: 1.5 }}>{props.speed}</Typography>
        <Typography sx={{ mt: 1.5 }}>{props.height}</Typography>
        <Typography sx={{ mt: 1.5 }}>{props.weight}</Typography>
      </CardContent>
    </Card>
  );
}
