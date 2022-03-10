import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Panel, BackgroundImage } from "./styles";
import { BigPokeball } from "@svgs";

const Containers = (props) => {
  return (
    <>
      <SafeAreaView>
        <Panel>
          <BackgroundImage>
            <BigPokeball />
          </BackgroundImage>
          {props.children}
        </Panel>
      </SafeAreaView>
    </>
  );
};

export default Containers;
