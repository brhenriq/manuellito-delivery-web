import axios from 'axios';

const api = axios.create({
  baseURL: "https://manuellito-delivery.herokuapp.com",
});

export default api;