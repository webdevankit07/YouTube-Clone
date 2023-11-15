import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { parseData } from '../../utils/parseData';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    'youtube/app/homePageVideos',
    async (isNext, { getState, rejectWithValue }) => {
        const {
            youtubeApp: { nextPageToken: nextPageTokenFromState, videos, category },
        } = getState();

        try {
            const { data } = await axios.get(
                `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${category}&key=${API_KEY}&part=snippet&type=video&${
                    isNext ? `pageToken=${nextPageTokenFromState}` : ''
                }`
            );

            const parsedData = await parseData(data.items);

            return { parsedData: [...videos, parsedData], nextPageToken: nextPageTokenFromState };
        } catch (err) {
            rejectWithValue(err);
        }
    }
);
