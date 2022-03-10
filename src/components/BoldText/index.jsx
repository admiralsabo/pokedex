import styled from "styled-components";
const BoldText = styled.Text`
  font-family: Poppins-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => (props.size ? `${props.size}px` : "24px")};
  line-height: ${(props) =>
    props.lineheight ? `${props.lineheight}px` : "32px"};
  color: ${(props) => (props.color ? props.color : props.theme.Dark_Gray)};
`;
export default BoldText;
