import axios from "axios";

const apiKey = "bd5e6c1b1dbfb8a08784437732192d3f";
const apiUrl = "https://api.themoviedb.org/3";

const baseAPI = axios.create({
  baseURL: apiUrl,
});

class TomdbRaiderApi {
  getMoviesBySearch = (search, page) =>
    baseAPI.get(`search/movie?api_key=${apiKey}&query=${search}&page=${page}`);

  getBestMovies = (page, year) =>
    baseAPI.get(`discover/movie?api_key=${apiKey}&year=${year}&page=${page}`);

  getWatchProviders = (id) =>
    baseAPI.get(`/movie/${id}/watch/providers?api_key=${apiKey}`);
}

export default new TomdbRaiderApi();
