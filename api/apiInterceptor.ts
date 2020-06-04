import axios from "axios";

const { BASE_URL } = process.env;

const tmdb = axios.create({
  baseURL: BASE_URL,
});

export default tmdb;
