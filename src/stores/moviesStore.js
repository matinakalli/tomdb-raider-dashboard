import { makeAutoObservable, observable } from "mobx";
import TomdbRaiderApi from "../API/TomdbRaiderApi";

class MoviesStore {
  movies = [];
  queryValue = "";
  selectedMovieTitle = "Lara Croft: Tomb Raider - The Cradle of Life";
  selectedMovieId = 1996;

  constructor() {
    makeAutoObservable(this, {
      movies: observable,
      queryValue: observable,
      selectedMovieTitle: observable,
      selectedMovieId: observable,
    });
  }

  /* SETTERS */

  setQueryValue = (value) => {
    this.queryValue = value;
  };

  setMovies = (movies) => {
    this.movies = movies;
  };

  setSelectedMovieTitle = (selectedMovieTitle) => {
    this.selectedMovieTitle = selectedMovieTitle;
  };

  setSelectedMovieId = (selectedMovieId) => {
    this.selectedMovieId = selectedMovieId;
  };
}

const moviesStore = new MoviesStore();

export default moviesStore;
