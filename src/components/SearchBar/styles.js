import styled from "styled-components";
import { Width } from "@constants";
export const SearchContainer = styled.View`
  display: flex;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${(props) => props.theme.Background};
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 25px;
  width: ${Width - 40}px;
`;
