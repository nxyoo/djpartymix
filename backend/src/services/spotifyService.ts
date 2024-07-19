// backend/src/services/spotifyService.ts
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: 'ecd6a8239b5c478c938afeee48e95465',
    clientSecret: 'bd238b91f355400e863ee4d3603e510c',
    redirectUri: 'https://dj.armanddesne.fr/callback'
});

export const searchTracks = async (query: string) => {
    try {
        const response = await spotifyApi.searchTracks(query);
        return response.body.tracks.items.map((track) => ({
            id: track.id,
            title: track.name,
            artist: track.artists.map((artist) => artist.name).join(', '),
        }));
    } catch (error) {
        console.error('Error searching tracks on Spotify:', error);
        throw error;
    }
};

export const getTrackDetails = async (trackId: string) => {
    try {
        const response = await spotifyApi.getTrack(trackId);
        const track = response.body;
        return {
            id: track.id,
            title: track.name,
            artist: track.artists.map((artist) => artist.name).join(', '),
            duration_ms: track.duration_ms,
            preview_url: track.preview_url,
        };
    } catch (error) {
        console.error('Error getting track details from Spotify:', error);
        throw error;
    }
};