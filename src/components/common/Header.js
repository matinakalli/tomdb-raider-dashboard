import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useStores } from "../../stores/useStores";

function Header({ showHr = false, children }) {
  const {
    themeStore: {
      theme: { headersColor },
    },
  } = useStores();
  return (
    <HeaderElement color={headersColor}>
      {children}
      {showHr && <BottomBorder color={headersColor} />}
    </HeaderElement>
  );
}

export default observer(Header);

const HeaderElement = styled.div`
  color: ${(props) => props.color};
`;

const BottomBorder = styled.hr`
  border-top: 1px solid ${(props) => props.color};
`;
