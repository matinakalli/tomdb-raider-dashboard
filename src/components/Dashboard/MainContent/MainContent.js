import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "../../pages/Home";
import MovieProviders from "../../pages/MovieProviders/MovieProviders";
import Settings from "../../pages/Settings/Settings";
import VoteStatistics from "../../pages/VoteStatistics/VoteStatistics";

function MainContent() {
  return (
    <MainContentContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vote-statistics" element={<VoteStatistics />} />
        <Route path="movie-providers" element={<MovieProviders />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </MainContentContainer>
  );
}

export default MainContent;

const MainContentContainer = styled.div`
  padding: 20px;
  width: 100%;
`;
