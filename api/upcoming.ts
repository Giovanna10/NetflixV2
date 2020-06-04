import { Movie, ResponseMovie } from "../types/types";
import tmdb from "./apiInterceptor";

const { KEY } = process.env;

export const getUpcomingMovie = async () => {
  const params = {
    api_key: KEY,
  };
  const response = await tmdb.get("/upcoming", { params });

  const upcomingMovies: Movie[] = response.data.results.map(
    (movie: ResponseMovie) => {
      const video = movie.video === false ? "" : movie.video;

      return {
        id: movie.id,
        release_date: movie.release_date,
        overview: movie.overview,
        video: video,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
        original_language: movie.original_language,
        original_title: movie.original_title,
        genre_ids: movie.genre_ids,
      };
    }
  );

  return upcomingMovies;
};
