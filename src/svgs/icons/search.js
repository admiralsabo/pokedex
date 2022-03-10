import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={21}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m20.547 15.67-4.75-3.804a.53.53 0 0 0-.332-.11h-.517c1.233-1.143 1.98-2.631 1.98-4.26 0-3.6-3.642-6.517-8.138-6.517C4.295.98.652 3.896.652 7.496c0 3.6 3.643 6.516 8.138 6.516 2.035 0 3.893-.598 5.321-1.585v.414c0 .1.051.194.137.266l4.75 3.803a.556.556 0 0 0 .665 0l.884-.708c.184-.147.184-.385 0-.532ZM8.79 12.508c-3.458 0-6.26-2.243-6.26-5.012 0-2.77 2.802-5.013 6.26-5.013 3.459 0 6.26 2.243 6.26 5.013s-2.801 5.012-6.26 5.012Z"
      fill="#666"
    />
  </Svg>
);

export default SvgComponent;