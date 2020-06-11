import { Film, ResponseMovie } from "../../types/types";
import tmdb from "../apiInterceptor";

const { KEY } = process.env;

export const getTopRatedSeries = async () => {
  const params = {
    api_key: KEY,
  };
  const res = await tmdb.get("/tv/top_rated", { params });

  const topRatedSeries: Film[] = res.data.results.map((movie: ResponseMovie) => {
    return {
        id: movie.id,
        release_date: movie.release_date,
        overview: movie.overview,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
        language: movie.original_language,
        title: movie.original_title,
        genre_ids: movie.genre_ids,
      }
  }) ;

  return topRatedSeries;
};
