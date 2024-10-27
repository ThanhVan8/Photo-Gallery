import axios from "axios";

axios.defaults.baseURL = `https://api.unsplash.com`;
axios.defaults.headers.common['Authorization'] = `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`;

// const instance = axios.create({
//   baseURL: 'https://api.unsplash.com/',
// })

export default axios;