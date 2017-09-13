import React from 'react';
import VideoListItem from './videoListItem.js'

const VideoList = ({ videos, onVideoSelected }) => {
    return (
        <ul>
            {
                videos.map(video =>
                    <VideoListItem
                        key={video.etag}
                        video={video}
                        onVideoSelected={onVideoSelected}
                    />
                )
            }
        </ul>
    );
}

export default VideoList;