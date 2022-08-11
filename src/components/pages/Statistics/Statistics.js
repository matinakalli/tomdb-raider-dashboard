import styled from "styled-components";
import Header from "../../common/Header";
import AvengersWatchProviders from "./AvengersWatchProviders";
import PopularMovies from "./PopularMovies";

function Statistics() {
  return (
    <StatisticsContainer>
      <Header>
        <h2>Statistics</h2>
        <PopularMovies />

        <AvengersWatchProviders />
      </Header>
    </StatisticsContainer>
  );
}

export default Statistics;

const StatisticsContainer = styled.div`
  padding: 30px;
`;
