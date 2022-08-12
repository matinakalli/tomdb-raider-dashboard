import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useStores } from "../../../stores/useStores";
import { FlexContainer } from "../../common/FlexContainer";
import Header from "../../common/Header";

function ListOfMovieSearch({ searchValue, closeList }) {
  const {
    moviesStore: { movies, setSelectedMovieId, setSelectedMovieTitle },
    themeStore: {
      theme: { primaryColor, thirdColor, fontColor },
    },
  } = useStores();

  function setSelectedMovie(id, title) {
    setSelectedMovieId(id);
    setSelectedMovieTitle(title);
  }

  return (
    <ListOfMovieSearchOverlay bgColor={primaryColor}>
      <ListContainer bgColor={thirdColor}>
        <Header showHr={true}>
          <h2>Search Results for '{searchValue}'</h2>
        </Header>
        {movies.length > 0 && (
          <Note fontcolor={fontColor}>
            Please choose the Movie you would like to see statistics for.
          </Note>
        )}

        <MoviesList>
          {movies.map(({ id, title, release_date }) => (
            <MovieItem
              key={id}
              justify="space-between"
              onClick={() => setSelectedMovie(id, title)}
            >
              <p>{title}</p>
              <span>{release_date}</span>
            </MovieItem>
          ))}

          {movies.length === 0 && (
            <NoMoviesText>
              There are no movies. Please try something else or check your
              spelling
            </NoMoviesText>
          )}
        </MoviesList>

        <CancelButton primaryColor={primaryColor} onClick={closeList}>
          CANCEL
        </CancelButton>
      </ListContainer>
    </ListOfMovieSearchOverlay>
  );
}

export default observer(ListOfMovieSearch);

const ListOfMovieSearchOverlay = styled.div`
  padding: 30px;
  position: absolute;
  background: ${(props) => props.bgColor}94;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
`;
const ListContainer = styled.div`
  padding: 30px;
  background: ${(props) => props.bgColor};
  width: 60%;
  margin: 0 auto;
  border-radius: 5px;
  height: 80vh;
  position: relative;
`;

const MoviesList = styled.div`
  overflow-y: scroll;
  max-height: 600px;
`;

const MovieItem = styled(FlexContainer)`
  padding: 15px 10px;
  cursor: pointer;
  border-bottom: 1px solid #e3e3e3;

  &:hover {
    background: #f7f7f7;
  }
  span {
    color: #606060;
  }
`;

const Note = styled.p`
  color: ${(props) => props.fontcolor};
  font-style: italic;
  margin-bottom: 10px;
`;

const NoMoviesText = styled.p`
  color: ${(props) => props.fontcolor};
  font-style: italic;
  text-align: center;
  font-size: 20px;
  margin: 30px auto;
`;

const CancelButton = styled.div`
  background: ${(props) => props.primaryColor};
  color: #f0f0f0;
  position: absolute;
  width: 150px;
  border-radius: 5px;
  padding: 15px 0;
  text-align: center;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  font-size: 15px;
`;
