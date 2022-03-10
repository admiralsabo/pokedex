import styled from "styled-components";
import { Width } from "@constants";
export const Container = styled.View`
  height: 80px;
  width: ${Width / 2 - 30}px;
  background-color: ${(props) =>
    props.color ? props.color : props.theme.Grass};
  border-radius: 15px;
  margin-top: 10px;
`;
