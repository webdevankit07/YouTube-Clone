import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { parseData } from '../../utils/parseData';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const getSearchPageVideos = createAsyncThunk(
    'youtube/app/SearchPageVideos',
    async (isNext, { getState, rejectWithValue }) => {
        const {
            youtubeApp: { nextPageToken: nextPageTokenFromState, searchedVideos, searchTerm },
        } = getState();

        try {
            const { data } = await axios.get(
                `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${
                    isNext ? `pageToken=${nextPageTokenFromState}` : ''
                }`
            );
            const parsedData = await parseData(data.items);

            return {
                parsedData: [...searchedVideos, parsedData],
                nextPageToken: nextPageTokenFromState,
            };
        } catch (err) {
            rejectWithValue(err);
        }
    }
);
