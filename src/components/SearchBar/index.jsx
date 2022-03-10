import React, { useState } from "react";
import { TextInput } from "react-native";
import RegularText from "../RegularText";
import { SearchContainer } from "./styles";
import { Medium_Gray } from "@constants/colors";
import { SearchIcon } from "@svgs";
const SearchBar = ({ placeholder, onSearch }) => {
  return (
    <SearchContainer>
      <SearchIcon style={{ position: "absolute", left: 16 }} />
      <TextInput
        placeholder={placeholder}
        style={{ width: "100%", paddingLeft: 30 }}
        onChangeText={(text) => {
          onSearch(text);
        }}
      />
    </SearchContainer>
  );
};

export default SearchBar;
