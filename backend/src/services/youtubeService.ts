// backend/src/services/youtubeService.ts
import axios from 'axios';

const API_KEY = 'AIzaSyAREEY-yRCXNmwRFs60GnqjRqYSWNbxkBM';

export const searchVideos = async (query: string) => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: API_KEY,
                q: query,
                part: 'snippet',
                type: 'video',
                maxResults: 10,
            },
        });

        return response.data.items.map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            channel: item.snippet.channelTitle,
        }));
    } catch (error) {
        console.error('Error searching videos on YouTube:', error);
        throw error;
    }
};

export const getVideoDetails = async (videoId: string) => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                key: API_KEY,
                id: videoId,
                part: 'snippet,contentDetails',
            },
        });

        const video = response.data.items[0];
        return {
            id: video.id,
            title: video.snippet.title,
            channel: video.snippet.channelTitle,
            duration: parseISO8601Duration(video.contentDetails.duration),
        };
    } catch (error) {
        console.error('Error getting video details from YouTube:', error);
        throw error;
    }
};

function parseISO8601Duration(duration: string) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = parseInt(match[1]?.replace('H', '') || '0', 10) * 60 * 60 * 1000;
    const minutes = parseInt(match[2]?.replace('M', '') || '0', 10) * 60 * 1000;
    const seconds = parseInt(match[3]?.replace('S', '') || '0', 10) * 1000;

    return hours + minutes + seconds;
}