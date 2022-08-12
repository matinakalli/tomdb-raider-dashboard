import { useEffect, useState } from "react";
import styled from "styled-components";
import TomdbRaiderApi from "../../../API/TomdbRaiderApi";
import Header from "../../common/Header";
import React from "react";
import BarChart from "../../common/Charts/BarChart";
import Search from "./Search";
import { useStores } from "../../../stores/useStores";
import { observer } from "mobx-react-lite";

function MovieProviders() {
  const [rentProviders, setRentProviders] = useState([]);
  const [buyProviders, setBuyProviders] = useState([]);
  const {
    moviesStore: { selectedMovieId, selectedMovieTitle },
  } = useStores();

  function getProviderCountByType(type, label) {
    if (type === undefined) {
      return 0;
    }
    return type.filter(({ provider_name }) => {
      return provider_name === label;
    });
  }

  useEffect(() => {
    TomdbRaiderApi.getWatchProviders(selectedMovieId).then(({ data }) => {
      const { results } = data;
      let countRentForITunes = 0;
      let countRentForGPlay = 0;
      let countRentForMicrosoft = 0;
      let countBuyForITunes = 0;
      let countBuyForGPlay = 0;
      let countBuyForMicrosoft = 0;
      Object.entries(results).forEach((country) => {
        countRentForITunes =
          getProviderCountByType(country[1].rent, "Apple iTunes").length > 0
            ? countRentForITunes + 1
            : countRentForITunes;
        countRentForGPlay =
          getProviderCountByType(country[1].rent, "Google Play Movies").length >
          0
            ? countRentForGPlay + 1
            : countRentForGPlay;
        countRentForMicrosoft =
          getProviderCountByType(country[1].rent, "Microsoft Store").length > 0
            ? countRentForMicrosoft + 1
            : countRentForMicrosoft;

        //
        countBuyForITunes =
          getProviderCountByType(country[1].buy, "Apple iTunes").length > 0
            ? countBuyForITunes + 1
            : countBuyForITunes;
        countBuyForGPlay =
          getProviderCountByType(country[1].buy, "Google Play Movies").length >
          0
            ? countBuyForGPlay + 1
            : countBuyForGPlay;
        countBuyForMicrosoft =
          getProviderCountByType(country[1].buy, "Microsoft Store").length > 0
            ? countBuyForMicrosoft + 1
            : countBuyForMicrosoft;
      });
      setRentProviders([
        countRentForITunes,
        countRentForGPlay,
        countRentForMicrosoft,
      ]);

      setBuyProviders([
        countBuyForITunes,
        countBuyForGPlay,
        countBuyForMicrosoft,
      ]);
    });
  }, [selectedMovieId]);

  const labels = ["Apple iTunes", "Google Play Movies", "Microsoft Store"];

  const datasetLabels = ["Rent", "Buy"];

  return (
    <MovieProvidersContainer>
      <Header showHr={true}>
        <h2>Movie Providers</h2>
      </Header>
      <Search />
      <Header>
        <Title>Top 3 Watch Providers for '{selectedMovieTitle}'</Title>
      </Header>

      {rentProviders.length > 0 && buyProviders.length > 0 && (
        <BarChart
          labels={labels}
          datasetLabels={datasetLabels}
          dataset1={rentProviders}
          dataset2={buyProviders}
          chartTitle="According to each Country usage"
        />
      )}
    </MovieProvidersContainer>
  );
}

export default observer(MovieProviders);

const MovieProvidersContainer = styled.div`
  margin: 70px 20px;
`;
const Title = styled.h3`
  text-align: center;
  margin: 15px auto;
`;
