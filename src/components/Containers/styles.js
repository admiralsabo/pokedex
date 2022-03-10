import styled from "styled-components";

export const Panel = styled.View`
  background-color: ${(props) => props.theme.White};
  display: flex;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
`;
export const BackgroundImage = styled.View`
  position: absolute;
  right: -15px;
`;
