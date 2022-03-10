export const Dark_Gray = "#212121";
export const Medium_Gray = "#666666";
export const Light_Gray = "#E0E0E0";
export const White = "#FFFFFF";
export const Background = "#F7F7F7";
export const Rock = "#B69E31";
export const Ghost = "#70559B";
export const Steel = "#B7B9D0";
export const Water = "#6493EB";
export const Grass = "#48D0B0";
export const Psychic = "#FB5584";
export const Ice = "#9AD6DF";
export const Dark = "#75574C";
export const Fairy = "#E69EAC";
export const Normal = "#AAA67F";
export const Fighting = "#C12239";
export const Flying = "#A891EC";
export const Poison = "#A43E9E";
export const Ground = "#DEC16B";
export const Bug = "#A7B723";
export const Fire = "#FB6C6C";
export const Electric = "#F9CF30";
export const Dragon = "#7037FF";

export const GetColor = (color) => {
  switch (color) {
    case "rock":
      return Rock;
      break;
    case "ghost":
      return Ghost;
      break;
    case "steel":
      return Steel;
      break;
    case "gray":
      return Steel;
      break;
    case "water":
      return Water;
      break;
    case "pink":
      return Fairy;
      break;
    case "grass":
      return Grass;
      break;
    case "psychic":
      return Psychic;
      break;
    case "dark":
      return Dark;
      break;
    case "fairy":
      return Fairy;
      break;
    case "normal":
      return Normal;
      break;
    case "fighting":
      return Fighting;
      break;
    case "flying":
      return Flying;
      break;
    case "poison":
      return Poison;
      break;
    case "ground":
      return Ground;
      break;
    case "fire":
      return Fire;
      break;
    case "electric":
      return Electric;
      break;
    case "dragon":
      return Dragon;
      break;

    default:
      return Grass;
      break;
  }
};
