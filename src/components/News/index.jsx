import React from "react";
import { Image } from "react-native";
import BoldText from "./../BoldText";
import { Light_Gray } from "@constants/colors";
import { NewsContainer, ContentContainer, ImageContainer } from "./styles";
import { Width } from "@constants";
const News = ({ header, date, url }) => {
  var mnths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return `${day} ${mnths[mnth - 1]} ${date.getFullYear()}`;
  }
  return (
    <NewsContainer>
      <ContentContainer>
        <BoldText size={12} lineheight={16}>
          {header}
        </BoldText>
        <BoldText size={10} lineheight={16} color={Light_Gray}>
          {convert(date)}
        </BoldText>
      </ContentContainer>
      <ImageContainer>
        <Image
          source={{
            uri: url,
          }}
          style={{ width: Width / 2 - 30, height: 75, borderRadius: 10 }}
        />
      </ImageContainer>
    </NewsContainer>
  );
};

export default News;
