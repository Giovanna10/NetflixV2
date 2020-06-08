import { Film, ResponseMovie } from "../../types/types";
import tmdb from "../apiInterceptor";

const { KEY } = process.env;

export const getNowPlayingMovie = async () => {
  const params = {
    api_key: KEY,
  };
  const res = await tmdb.get("/movie/now_playing", { params });

  const response: ResponseMovie = res.data.results[0];
  const movieNowPlaying: Film = {
    id: response.id,
    release_date: response.release_date,
    overview: response.overview,
    poster_path: response.poster_path,
    backdrop_path: response.backdrop_path,
    language: response.original_language,
    title: response.original_title,
    genre_ids: response.genre_ids,
  };

  return movieNowPlaying;
};
