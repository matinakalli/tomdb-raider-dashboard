import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useStores } from "../../stores/useStores";

function Header({ children }) {
  const {
    themeStore: {
      theme: { headersColor },
    },
  } = useStores();
  return <HeaderElement color={headersColor}>{children}</HeaderElement>;
}

export default observer(Header);

const HeaderElement = styled.div`
  color: ${(props) => props.color};
`;
