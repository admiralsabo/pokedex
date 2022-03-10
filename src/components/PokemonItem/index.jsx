import React, { useEffect, useState } from "react";
import { Container, TypeContainer, Overlay } from "./styles";
import { View, Image, Platform } from "react-native";
import { BoldText, RegularText } from "../";
import { GetColor, White } from "@constants/colors";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import uuid from "react-native-uuid";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const PokemonItem = ({ data }) => {
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    species();
  }, []);
  const species = async () => {
    const pokemon = await pokemondata();
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`
      );
      const json = await response.json();
      setPokemonSpecies(json);
    } catch (error) {}
  };

  const pokemondata = async () => {
    try {
      const response = await fetch(data.url);
      const json = await response.json();
      setPokemonData(json);
      return json;
    } catch (error) {}
  };

  if (pokemonData == null && pokemonSpecies == null) {
    return (
      <Overlay loading width={100}>
        <ShimmerPlaceholder
          style={{ height: "100%", width: "100%", borderRadius: 4 }}
        />
      </Overlay>
    );
  }
  return (
    <>
      {pokemonSpecies && pokemonData && (
        <Container color={GetColor(pokemonData.types[0].type.name)}>
          <BoldText
            size={data.name.length >= 9 ? 16 : 20}
            color={White}
            style={{ marginLeft: 13, marginTop: 18 }}
          >
            {data.name}
          </BoldText>
          <BoldText
            size={20}
            lineHeight={16}
            color={White}
            style={{ position: "absolute", right: 12, top: 5, opacity: 0.5 }}
          >
            #{pokemonData.id}
          </BoldText>
          {pokemonData.types.map((type) => {
            return (
              <TypeContainer key={`type-${uuid.v4()}`}>
                <BoldText size={12} color={White}>
                  {type.type.name}
                </BoldText>
              </TypeContainer>
            );
          })}
          <Image
            source={{
              uri: pokemonData.sprites.other["official-artwork"].front_default,
            }}
            style={{
              width: 75.7,
              height: 72,
              position: "absolute",
              bottom: 8,
              right: 8,
            }}
          />
        </Container>
      )}
    </>
  );
};

export default PokemonItem;
