import { Film, ResponseTvSeries } from "../../types/types";
import tmdb from "../apiInterceptor";

const { KEY } = process.env;

export const getSerieOnTheAir = async () => {
  const params = {
    api_key: KEY,
  };
  const res = await tmdb.get("/tv/on_the_air", { params });

  const response: ResponseTvSeries = res.data.results[0];
  const seriesAiringToday: Film = {
    id: response.id,
    release_date: response.first_air_date,
    overview: response.overview,
    poster_path: response.poster_path,
    backdrop_path: response.backdrop_path,
    language: response.original_language,
    title: response.original_name,
    genre_ids: response.genre_ids,
  };

  return seriesAiringToday;
};
