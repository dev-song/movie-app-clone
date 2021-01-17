import axios from 'axios';

const TMDB_URL = 'https://api.themoviedb.org/3/';

const api = axios.create({
  baseURL: TMDB_URL,
  params: {
    api_key: 'f4820b28301d771a195064cee11f20ee',
    language: 'en-US',
  }
});

const MOVIE_API = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  search: keyword => api.get('search/movie', {
    params: { query: encodeURIComponent(keyword) }
  }),
  movieDetail: id => api.get(`movie/${id}`, {
    params: { append_to_response: 'videos' },
  }),
};

const TV_API = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  search: keyword => api.get('search/tv', {
    params: { query: encodeURIComponent(keyword) }
  }),
  TVDetail: id => api.get(`tv/${id}`, {
    params: { append_to_response: 'videos' },
  }),
};

export { MOVIE_API, TV_API };