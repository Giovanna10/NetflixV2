export interface ResponseMovie {
    id: number;
    release_date: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
}

export interface Film {
    id: number;
    release_date: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    language: string;
    title: string;
    genre_ids: number[];
}

export interface ResponseTvSeries {
    id: number;
    first_air_date: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    original_language: string;
    original_name: string;
    genre_ids: number[];
}