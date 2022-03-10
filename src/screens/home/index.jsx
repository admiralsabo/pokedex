import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, TouchableOpacity } from "react-native";
import {
  BoldText,
  RegularText,
  NavItem,
  Containers,
  SearchBar,
  News,
} from "@components";
import { Water, Grass, Fire, Electric, Poison, Dark } from "@constants/colors";
import {
  NavigationContainer,
  NewsHeaderContainer,
  NewsContainer,
} from "./styles";
const Home = ({ navigation }) => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?searchIn=title&q=pokemon&from=2022-03-09&sortBy=popularity&apiKey=c16111993fbd44d1b45dcdc317060d0b"
      );
      const json = await response.json();
      setNews(json.articles);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView
        style={{ height: "100%" }}
        showsVerticalScrollIndicator={false}
        threshold={200}
      >
        <Containers>
          <BoldText
            size={24}
            lineheight={32}
            style={{ marginTop: 32, marginLeft: 20 }}
          >
            What Pokemon{"\n"}are you looking for?
          </BoldText>
          <SearchBar placeholder="Search Pokemon, Move, Ability etc" />
          <NavigationContainer>
            <NavItem
              label="Pokedex"
              color={Grass}
              onPress={() => navigation.navigate("Pokedex")}
            />
            <NavItem label="Moves" color={Fire} />
            <NavItem label="Abilities" color={Water} />
            <NavItem label="Items" color={Electric} />
            <NavItem label="Locations" color={Poison} />
            <NavItem label="Type Charts" color={Dark} />
          </NavigationContainer>
        </Containers>
        <NewsHeaderContainer>
          <BoldText
            size={24}
            lineheight={32}
            style={{ marginTop: 32, marginLeft: 20 }}
          >
            Pokemon News
          </BoldText>
          <TouchableOpacity>
            <RegularText
              size={14}
              lineheight={16}
              color={Water}
              style={{ marginTop: 42, marginRight: 20 }}
            >
              View All
            </RegularText>
          </TouchableOpacity>
        </NewsHeaderContainer>
        <NewsContainer>
          {news &&
            news.map((n, index) => {
              return (
                <News
                  key={`news-${index}`}
                  header={n.title}
                  date={n.publishedAt}
                  url={n.urlToImage}
                />
              );
            })}
        </NewsContainer>
      </ScrollView>
    </>
  );
};

export default Home;
