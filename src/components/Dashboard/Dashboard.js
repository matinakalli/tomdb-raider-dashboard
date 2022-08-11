import { observer } from "mobx-react";
import styled from "styled-components";
import { useStores } from "../../stores/useStores";
import { FlexContainer } from "../common/FlexContainer";
import SideMenu from "../SideMenu/SideMenu";
import MainContent from "./MainContent/MainContent";
import TopMenu from "./TopMenu/TopMenu";

function Dashboard() {
  const {
    themeStore: {
      theme: { thirdColor },
    },
  } = useStores();
  return (
    <Container bgcolor={thirdColor}>
      <TopMenu />

      <FlexContainer
        align="stretch"
        justify="flex-start"
        style={{ minHeight: "100vh" }}
      >
        <SideMenu />

        <MainContent />
      </FlexContainer>
    </Container>
  );
}

export default observer(Dashboard);

const Container = styled.div`
  padding: 70px 0 0;
  background: ${(props) => props.bgcolor};
`;
