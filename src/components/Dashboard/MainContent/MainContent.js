import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "../../pages/Home";
import Settings from "../../pages/Settings/Settings";
import Statistics from "../../pages/Statistics/Statistics";

function MainContent() {
  return (
    <MainContentContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="statistics" element={<Statistics />} />
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
