import React, { useState, useEffect } from "react";
import { StatusBar, ScrollView, Text } from "react-native";
import {
  Containers,
  BackButton,
  BoldText,
  SearchBar,
  PokemonList,
} from "@components";
const Pokedex = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState(false);
  const [filtered, setFiltered] = useState([]);
  console.log(offset);

  const fetchPokemons = async (offset) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=926&offset=0`
      );
      const json = await response.json();
      setPokemons(json.results);
    } catch (error) {
      console.error(error);
    }
  };
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 40;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const searchPokemon = (text) => {
    if (text === "") {
      console.log("empty");
      setSearch(false);
      return;
    }
    console.log(text);
    setSearch(true);
    const filtered = pokemons.filter((x) =>
      x.name.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(filtered);
  };
  useEffect(() => {
    fetchPokemons(offset);
  }, []);
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Containers>
        <BackButton onPress={() => navigation.goBack()} />
        <BoldText
          size={24}
          lineheight={32}
          style={{ marginTop: 32, marginLeft: 20 }}
        >
          Pokedex
        </BoldText>
        <SearchBar
          placeholder="Search Pokemon"
          onSearch={(text) => searchPokemon(text)}
        />
        <ScrollView
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              setLimit(limit + 20);
            }
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={400}
        >
          {search ? (
            <PokemonList data={filtered} />
          ) : (
            <PokemonList data={pokemons.slice(0, limit)} />
          )}
        </ScrollView>
      </Containers>
    </>
  );
};

export default Pokedex;
