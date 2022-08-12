import { observer } from "mobx-react";
import styled from "styled-components";
import { useStores } from "../../stores/useStores";
import MenuItem from "./MenuItem";

const SideMenu = () => {
  const {
    themeStore: {
      theme: { secondaryColor, fontColor },
    },
  } = useStores();
  return (
    <SideMenuContainer fontColor={fontColor} secondaryColor={secondaryColor}>
      <MenuItem name="Home" route="/" />
      <MenuItem name="Vote Statistics" route="/vote-statistics" />
      <MenuItem name="Movie Providers" route="/movie-providers" />
      <MenuItem name="Settings" route="/settings" />
    </SideMenuContainer>
  );
};

export default observer(SideMenu);

const SideMenuContainer = styled.div`
  background-color: ${(props) => props.secondaryColor};
  width: 300px;
  padding: 20px;
  color: ${(props) => props.fontColor};
  box-shadow: 8px 3px 17px -2px ${(props) => props.secondaryColor};
`;
