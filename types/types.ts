export interface ResponseMovie {
    id: number;
    release_date: string;
    overview: string;
    video: string | boolean;
    poster_path: string;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
}

export interface Movie {
    id: number;
    release_date: string;
    overview: string;
    video: string;
    poster_path: string;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
}