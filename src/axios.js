import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;

// https://api.themoviedb.org/3/trending/all/week?api_key=7b01c2093a56475e68d257a02867e004&language=en-US
