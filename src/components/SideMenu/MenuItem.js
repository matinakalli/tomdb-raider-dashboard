import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useStores } from "../../stores/useStores";

const MenuItem = ({ name, route }) => {
  const {
    themeStore: {
      theme: { defaultMenuColor, activeMenuColor },
    },
  } = useStores();
  return (
    <MenuItemContainer
      defaultmenucolor={defaultMenuColor}
      to={route}
      activemenucolor={activeMenuColor}
    >
      {name}
    </MenuItemContainer>
  );
};

export default observer(MenuItem);
const MenuItemContainer = styled(NavLink)`
  display: block;
  padding: 5px 0;
  color: ${(props) => props.defaultmenucolor};
  text-decoration: none;
  font-size: 22px;
  letter-spacing: 1.2px;

  &:hover {
    font-weight: 700;
  }

  &.active {
    color: ${(props) => props.activemenucolor};
    font-weight: 700;
  }
`;
