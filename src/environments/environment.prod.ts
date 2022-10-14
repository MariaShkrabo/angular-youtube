export const baseApiUrl: string = 'https://www.googleapis.com/youtube/v3/';

export const environment = {
    production: true,
    endpoints: {
        commentThreads: {
            getComments: `${baseApiUrl}commentThreads?part=snippet`,
        },
        channel: {
            getChannel: `${baseApiUrl}channels?part=snippet,brandingSettings,statistics`,
        },
        channelSections: {
            getChannelSections: `${baseApiUrl}channelSections?part=snippet,contentDetails`,
        },
        playlists: {
            getPlaylists: `${baseApiUrl}playlists?maxResults=10&part=snippet,contentDetails`,
            getPlaylistItems: `${baseApiUrl}playlistItems?part=contentDetails,snippet`,
        },
        search: {
            getVideoBySearchingByKeyword: `${baseApiUrl}search?part=snippet&maxResults=25`,
            getRelatedVideos: `${baseApiUrl}search?part=snippet&maxResults=25&type=video`,
        },
        videos: {
            getVideo: `${baseApiUrl}videos?part=snippet,statistics`,
        },
        categories: {
            getCategories: `${baseApiUrl}videoCategories?part=snippet&regionCode=BY`,
        },
    },
};
