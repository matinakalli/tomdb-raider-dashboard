import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useStores } from "../../../stores/useStores";

const TopMenu = () => {
  const {
    themeStore: {
      theme: { primaryColor },
    },
  } = useStores();
  return (
    <TopMenuContainer id="top-menu" primaryColor={primaryColor}>
      <h2>The TomDashBoard</h2>
    </TopMenuContainer>
  );
};

export default observer(TopMenu);

const TopMenuContainer = styled.div`
  width: 100%;
  background: ${(props) => props.primaryColor};
  color: white;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 14px 1px ${(props) => props.primaryColor};
`;
