// Utilitaire pour choisir entre Spotify et YouTube
export const chooseApi = (musicService: string) => {
    if (musicService === 'spotify') {
        return 'https://api.spotify.com/v1';
    } else if (musicService === 'youtube') {
        return 'https://www.googleapis.com/youtube/v3';
    } else {
        throw new Error('Invalid music service choice');
    }
};
