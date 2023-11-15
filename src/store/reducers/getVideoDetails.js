import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { convertRawtoString } from '../../utils/convertRawtoString';
import { timeSince } from '../../utils/timeSince';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const getVideoDetails = createAsyncThunk(
    'youtube/app/videoDetails',
    async (id, { rejectWithValue }) => {
        try {
            const {
                data: { items },
            } = await axios.get(
                `https://youtube.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics,contentDetails,status&type=video&id=${id}`
            );
            const parsedData = await parseData(items[0]);
            return parsedData;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

const parseData = async (item) => {
    const { snippet, id, statistics } = item;

    const {
        data: { items },
    } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?key=${API_KEY}&part=snippet,statistics&id=${snippet.channelId}`
    );
    const channelImage = items[0].snippet.thumbnails.default.url;
    const subscriberCount = items[0].statistics.subscriberCount;

    const videoData = {
        videoId: id,
        videoTitle: snippet.title,
        videoDescription: snippet.description,
        videoViews: convertRawtoString(statistics.viewCount),
        videoLikes: convertRawtoString(statistics.likeCount),
        videoAge: timeSince(new Date(snippet.publishedAt)),
        channelInfo: {
            id: snippet.channelId,
            image: channelImage,
            name: snippet.channelTitle,
            subscribers: convertRawtoString(subscriberCount),
        },
    };

    return videoData;
};
