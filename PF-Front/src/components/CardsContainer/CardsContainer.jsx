import React from "react";
import CardRoom from "../CardRoom/CardRoom";
import { Grid } from "@mui/material";

export default function CardsContainer() {
  const cardsRooms = [
    {
      id: 1,
      name: "bulbasaur",
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45,
      height: 0.7,
      weight: 6.9,
      types: ["grass", "poison"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
      created: "false",
    },
    {
      id: 2,
      name: "ivysaur",
      hp: 60,
      attack: 62,
      defense: 63,
      speed: 60,
      height: 1,
      weight: 13,
      types: ["grass", "poison"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
      created: "false",
    },
    {
      id: 3,
      name: "venusaur",
      hp: 80,
      attack: 82,
      defense: 83,
      speed: 80,
      height: 2,
      weight: 100,
      types: ["grass", "poison"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
      created: "false",
    },
    {
      id: 4,
      name: "charmander",
      hp: 39,
      attack: 52,
      defense: 43,
      speed: 65,
      height: 0.6,
      weight: 8.5,
      types: ["fire"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
      created: "false",
    },
    {
      id: 5,
      name: "charmeleon",
      hp: 58,
      attack: 64,
      defense: 58,
      speed: 80,
      height: 1.1,
      weight: 19,
      types: ["fire"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
      created: "false",
    },
    {
      id: 6,
      name: "charizard",
      hp: 78,
      attack: 84,
      defense: 78,
      speed: 100,
      height: 1.7,
      weight: 90.5,
      types: ["fire", "flying"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
      created: "false",
    },
    {
      id: 7,
      name: "squirtle",
      hp: 44,
      attack: 48,
      defense: 65,
      speed: 43,
      height: 0.5,
      weight: 9,
      types: ["water"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
      created: "false",
    },
    {
      id: 8,
      name: "wartortle",
      hp: 59,
      attack: 63,
      defense: 80,
      speed: 58,
      height: 1,
      weight: 22.5,
      types: ["water"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
      created: "false",
    },
    {
      id: 9,
      name: "blastoise",
      hp: 79,
      attack: 83,
      defense: 100,
      speed: 78,
      height: 1.6,
      weight: 85.5,
      types: ["water"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
      created: "false",
    },
    {
      id: 10,
      name: "caterpie",
      hp: 45,
      attack: 30,
      defense: 35,
      speed: 45,
      height: 0.3,
      weight: 2.9,
      types: ["bug"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
      created: "false",
    },
  ];
  return (
    <Grid container spacing={2} direction="row">
      {cardsRooms &&
        cardsRooms.map((room) => (
          <Grid item xs={4} key={room.id}>
            <CardRoom
              name={room.name}
              image={room.image}
              speed={room.speed}
              height={room.height}
              weight={room.weight}
            />
          </Grid>
        ))}
    </Grid>
  );
}
