import styled from "styled-components";
const RegularText = styled.Text`
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => (props.size ? `${props.size}px` : "24px")};
  line-height: ${(props) =>
    props.lineheight ? `${props.lineheight}px` : "32px"};
  color: ${(props) => (props.color ? props.color : props.theme.Dark_Gray)};
`;

export default RegularText;
