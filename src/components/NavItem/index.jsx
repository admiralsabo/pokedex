import React from "react";
import { Container } from "./styles";
import { MediumPokeball } from "@svgs";
import BoldText from "../BoldText";
import { White } from "@constants/colors";
import { TouchableOpacity } from "react-native";

const NavItem = ({ label, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container color={color}>
        <MediumPokeball style={{ position: "absolute", right: 0 }} />
        <BoldText
          size={14}
          lineheight={16}
          color={White}
          style={{
            marginLeft: 12,
            marginTop: 31,
          }}
        >
          {label}
        </BoldText>
      </Container>
    </TouchableOpacity>
  );
};

export default NavItem;
