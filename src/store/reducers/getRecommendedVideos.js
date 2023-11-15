import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { parseRecommendedData } from '../../utils/parseRecommendedData';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const getRecommendedVideos = createAsyncThunk(
    'youtube/app/recommendedVideos',
    async (videoId, { getState, rejectWithValue }) => {
        const {
            youtubeApp: {
                currentPlaying: {
                    channelInfo: { id: channelId },
                },
            },
        } = getState();

        try {
            const {
                data: { items },
            } = await axios.get(
                `https://youtube.googleapis.com/youtube/v3/activities?&key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=50&type=video&id=${videoId}`
            );

            const parsedData = await parseRecommendedData(items);
            console.log(parsedData);
            return parsedData;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);
