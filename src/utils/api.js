import axios from 'axios';

const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/';

const request = axios.create({
    baseURL: BASE_URL,
    params: {
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
    },
});

export default request;
