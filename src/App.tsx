import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Header from "./components/Header/";
import styled from "styled-components";
import data from "./constants/data.json";
import { getColour, dataParser } from "./utils";

export const AppWrapper = styled.div`
  text-align: center;
  background-color: teal;
  height: 100vh;
`;

const tickers = Object.keys(data);

const App: React.FC<{}> = () => {
  const options = {
    chart: {
      zoomType: "x",
    },
    title: {
      text: "Stock data",
    },
    tooltip: {
      backgroundColor: "rgba(169, 222, 183, 0.75)",
      borderColor: "rgb(95, 186, 119)",
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: "datetime",
      labels: { format: "{value: %Y-%m-%d}" },
    },
    series: tickers.map((ticker) => ({
      name: ticker,
      type: "area",
      data: dataParser(data, ticker),
      gapSize: 5,
      tooltip: {
        valueDecimals: 2,
      },
      fillOpacity: 0.75,
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, `rgb(${getColour(ticker)})`],
          [1, `rgba(${getColour(ticker)}, 0.1)`],
        ],
      },
      lineWidth: 0.75,
      threshold: null,
    })),
  };

  return (
    <AppWrapper>
      <Header />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </AppWrapper>
  );
};

export default App;
