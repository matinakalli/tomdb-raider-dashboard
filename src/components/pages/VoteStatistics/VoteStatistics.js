import styled from "styled-components";
import Header from "../../common/Header";
import PopularMovies from "./PopularMovies";

function VoteStatistics() {
  return (
    <VoteStatisticsContainer>
      <Header showHr={true}>
        <h2>Vote Statistics</h2>
      </Header>
      <PopularMovies />
    </VoteStatisticsContainer>
  );
}

export default VoteStatistics;

const VoteStatisticsContainer = styled.div`
  padding: 30px;
`;
