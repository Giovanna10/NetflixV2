import { Film, ResponseTvSeries } from "../../types/types";
import tmdb from "../apiInterceptor";

const { KEY } = process.env;

export const getAiringTodayTvSeries = async () => {
  const params = {
    api_key: KEY,
  };
  const response = await tmdb.get("/tv/airing_today", { params });

  const seriesAiringToday: Film[] = response.data.results.map(
    (serie: ResponseTvSeries) => {

      return {
        id: serie.id,
        release_date: serie.first_air_date,
        overview: serie.overview,
        poster_path: serie.poster_path,
        backdrop_path: serie.backdrop_path,
        language: serie.original_language,
        title: serie.original_name,
        genre_ids: serie.genre_ids,
      };
    }
  );

  return seriesAiringToday;
};
