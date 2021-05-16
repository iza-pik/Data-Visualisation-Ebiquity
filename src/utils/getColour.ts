import { iTicker, stocks } from "../constants";

export const defaultColour = "200, 100, 150";

export const getColour = (ticker: string): string =>
  stocks[ticker as iTicker]?.colour || defaultColour;
