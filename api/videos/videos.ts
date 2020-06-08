import tmdb from "../apiInterceptor";

const { KEY } = process.env;

export const getYoutubeVideoId = async (id: number, movie: boolean) => {
    const params = {
      api_key: KEY,
    };

    const type = movie ? "movie" : "tv"
  
    const response = await tmdb.get(`${type}/${id}/videos`, { params });  
    
    const videoId: string = response.data.results.length !== 0 && response.data.results[0].key;
  
    return videoId;
  };