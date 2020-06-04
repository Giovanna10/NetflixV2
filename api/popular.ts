import { Movie, ResponseMovie } from "../types/types";
import tmdb from "./apiInterceptor";

const { KEY } = process.env;

export const getPopularMovie = async () => {
  const params = {
    api_key: KEY,
  };
  const response = await tmdb.get("/popular", { params });

  const popularMovies: Movie[] = response.data.results.map(
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

  return popularMovies;
};

export const getYoutubeVideoId = async (id: number) => {
  const params = {
    api_key: KEY,
  };

  const response = await tmdb.get(`/${id}/videos`, { params });  
  
  const videoId: string = response.data.results.length !== 0 && response.data.results[0].key;

  return videoId;
};
