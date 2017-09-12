import React from 'react';
import VideoListItem from './videoListItem.js'

// const VideoList = (props) => (
//     <ul>
//         {
//             debugger;
//             props.videos.map(video => {
//                 const {title} = video.snippet;
//                 <VideoListItem key={video.etag} title={title} />
//         })
//         }
//     </ul>
// );

const VideoList = (props) => {
    const videos = props.videos.map(video => {
        return <VideoListItem key={video.etag} title={video.snippet.title} />
    });

    return (
        <ul>
            {videos}
        </ul>
    );
}

export default VideoList;