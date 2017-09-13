import React from 'react';

const VideoListItem = ({ video, onVideoSelected }) => (
    <li onClick={() => onVideoSelected(video)}>
        {video.snippet.title}
    </li>
);

export default VideoListItem;