import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useStores } from "../../stores/useStores";
import { FlexContainer } from "../common/FlexContainer";
import Header from "../common/Header";

function Home() {
  const {
    themeStore: {
      theme: { headersColor },
    },
  } = useStores();
  return (
    <HomeContainer>
      <FlexContainer align="flex-start">
        <div style={{ marginTop: "50px" }}>
          <Header>
            <h2>Welcome to The TomDashBoard Raider</h2>

            <Paragraph>
              Just wanted to play with new ReactJs and use Chart.js for
              practise.
            </Paragraph>

            <Paragraph>
              I will keep adding features that I would like to try out.
            </Paragraph>

            <Paragraph>
              I am using{" "}
              <TDBLink
                fontcolor={headersColor}
                href="https://www.themoviedb.org/documentation/api"
                target="_blank"
              >
                'The Movie Database'
              </TDBLink>{" "}
              api for my needs.
            </Paragraph>
          </Header>
        </div>
        <img alt="tomb raider old" src="./tomb-raider-old.png" width="400" />
      </FlexContainer>
    </HomeContainer>
  );
}

export default observer(Home);

const HomeContainer = styled.div`
  padding: 20px;

  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin: 30px 0;
`;

const TDBLink = styled.a`
  color: ${(props) => props.fontcolor};
  font-weight: 600;
`;
