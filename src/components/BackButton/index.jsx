import React from "react";
import { TouchableOpacity } from "react-native";
import { BackIcon } from "@svgs";

const BackButton = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <BackIcon style={{ marginTop: 20, marginLeft: 20 }} />
      </TouchableOpacity>
    </>
  );
};

export default BackButton;
