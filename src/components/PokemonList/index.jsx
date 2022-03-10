import React from "react";
import PokemonItem from "../PokemonItem";
import { Container } from "./styles";
const PokemonList = ({ data }) => {
  return (
    <Container>
      {data &&
        data.map((pokemon, index) => {
          return (
            <PokemonItem data={pokemon} key={`${pokemon.name}-${index}`} />
          );
        })}
    </Container>
  );
};

export default PokemonList;
