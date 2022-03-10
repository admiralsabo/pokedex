import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={80}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M60.048 35.5c0 6.378-5.17 11.548-11.548 11.548S36.952 41.878 36.952 35.5s5.17-11.548 11.548-11.548 11.548 5.17 11.548 11.548Z"
      fill="#F7F7F7"
      fillOpacity={0.5}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.5 84c24.433 0 44.647-18.068 48.009-41.571H68.103C65.25 50.502 57.55 56.286 48.5 56.286s-16.75-5.784-19.603-13.857H.491C3.853 65.932 24.067 84 48.5 84ZM28.897 28.571H.491C3.853 5.068 24.067-13 48.5-13S93.147 5.068 96.509 28.571H68.103C65.25 20.498 57.55 14.714 48.5 14.714s-16.75 5.784-19.603 13.857Zm31.15 6.929c0 6.378-5.17 11.548-11.547 11.548-6.378 0-11.548-5.17-11.548-11.548s5.17-11.548 11.548-11.548 11.548 5.17 11.548 11.548Z"
      fill="#F7F7F7"
      fillOpacity={0.5}
    />
  </Svg>
);

export default SvgComponent;