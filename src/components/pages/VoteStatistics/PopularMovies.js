import { useEffect, useState } from "react";
import styled from "styled-components";
import TomdbRaiderApi from "../../../API/TomdbRaiderApi";
import Header from "../../common/Header";
import React from "react";
import PieChart from "../../common/Charts/PieChart";
import { FlexContainer } from "../../common/FlexContainer";
import DoughnutChart from "../../common/Charts/DoughnutChart";

function PopularMovies() {
  const [topTenLabels, setTopTenLabels] = useState([]);
  const [topTenRating, setTopTenRating] = useState([]);
  const [leastTenLabels, setLeastTenLabels] = useState([]);
  const [leastTenRating, setLeastTenRating] = useState([]);

  useEffect(() => {
    TomdbRaiderApi.getBestMovies(1, 2022).then(({ data }) => {
      const { results } = data;

      results.sort(
        (movie1, movie2) => movie2.vote_average - movie1.vote_average
      );

      results.forEach((movie, i) => {
        if (i < 10) {
          setTopTenLabels((labels) => [...labels, movie.title]);
          setTopTenRating((rates) => [...rates, movie.vote_count]);
        }
      });

      results.sort(
        (movie1, movie2) => movie1.vote_average - movie2.vote_average
      );

      results.forEach((movie, i) => {
        if (i < 10) {
          setLeastTenLabels((labels) => [...labels, movie.title]);
          setLeastTenRating((rates) => [...rates, movie.vote_count]);
        }
      });
    });
  }, []);

  return (
    <PopularMoviesContainer>
      <FlexContainer>
        <Column>
          <Header>
            <Title>Top 10 Popular & Top Rated Movies Votes</Title>
          </Header>
          {topTenLabels.length > 0 && topTenRating.length > 0 && (
            <PieChart labels={topTenLabels} chartData={topTenRating} />
          )}
        </Column>
        <Column>
          <Header>
            <Title>Least 10 Popular & Less Rated Movies Votes</Title>
          </Header>
          {topTenLabels.length > 0 && topTenRating.length > 0 && (
            <DoughnutChart labels={leastTenLabels} chartData={leastTenRating} />
          )}
        </Column>
      </FlexContainer>
    </PopularMoviesContainer>
  );
}

export default PopularMovies;

const PopularMoviesContainer = styled.div`
  margin: 20px;
`;

const Column = styled.div`
  width: 35%;
`;

const Title = styled.h3`
  text-align: center;
  margin: 15px auto;
`;
