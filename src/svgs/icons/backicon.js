import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="m10.263 19.612.884-.884a.536.536 0 0 0 0-.757l-6.925-6.926h15.242c.296 0 .536-.24.536-.536V9.26a.536.536 0 0 0-.536-.535H4.222l6.925-6.926a.536.536 0 0 0 0-.757l-.884-.884a.536.536 0 0 0-.757 0L.156 9.506a.536.536 0 0 0 0 .757l9.35 9.35c.209.208.548.208.757 0Z"
        fill="#212121"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
