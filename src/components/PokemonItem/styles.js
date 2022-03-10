import styled from "styled-components";
import { Width } from "@constants";
export const Container = styled.View`
  height: 144px;
  width: ${Width / 2 - 30}px;
  background-color: ${(props) =>
    props.color ? props.color : props.theme.Grass};
  border-radius: 25px;
  margin-top: 10px;
`;
export const TypeContainer = styled.View`
  margin-left: 8px;
  margin-top: 2px;
  width: 70px;
  border-radius: 25px;
  background-color: "rgba(255,255,255,.54)";
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.View`
  height: 144px;
  width: ${Width / 2 - 30}px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.error ? COLORS.gray : "rgba(255, 255, 255, 0.4)"};
  border-radius: 25px;
  margin-top: 10px;
  display: ${(props) => (props.loading ? "flex" : "none")};
`;
