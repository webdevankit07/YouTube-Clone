import axios from 'axios';
import { parseVideoDuration } from './parseVideoDuration';
import { convertRawtoString } from './convertRawtoString';
import { timeSince } from './timeSince';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const parseData = async (items) => {
    try {
        const videoIds = [];
        const channelIds = [];
        items.forEach((item) => {
            videoIds.push(item.id.videoId);
            channelIds.push(item.snippet.channelId);
        });

        const {
            data: { items: channelsData },
        } = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(
                ','
            )}&key=${API_KEY}`
        );
        const parsedChannelsData = [];
        channelsData.forEach((channel) => {
            parsedChannelsData.push({
                id: channel.id,
                image: channel.snippet.thumbnails.default.url,
                channel: channel.snippet.customUrl,
            });
        });

        const {
            data: { items: videosData },
        } = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds.join(
                ','
            )}&key=${API_KEY}`
        );
        const parseData = [];
        videosData.forEach((item, index) => {
            const { image: channelImage, channel } = parsedChannelsData.find(
                (data) => data.id === item.snippet.channelId
            );
            if (channelImage) {
                parseData.push({
                    videoId: item.id,
                    videoTitle: item.snippet.title,
                    videoDescription: item.snippet.description,
                    videoThumbnail: item.snippet.thumbnails.high.url,
                    videoLink: `https://www.youtube.com/watch?v=${item.id}`,
                    videoDuration: parseVideoDuration(videosData[index].contentDetails.duration),
                    videoViews: convertRawtoString(videosData[index].statistics.viewCount),
                    videoAge: timeSince(new Date(item.snippet.publishedAt)),
                    channelInfo: {
                        id: item.snippet.channelId,
                        image: channelImage,
                        name: item.snippet.channelTitle,
                        channelUrl: channel,
                    },
                });
            }
        });

        return parseData;
    } catch (err) {
        console.log(err);
    }
};
