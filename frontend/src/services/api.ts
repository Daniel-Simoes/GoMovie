import axios from 'axios';

const api = axios.create ({
  baseURL: 'http://www.omdbapi.com/?t=frozen&apikey=79174ddd&type=movie'
});

export default api;