import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    const {title, description} = video.snippet;

    return (
        <div>
            <div>
                <iframe src={videoUrl} />
            </div>
            <div>
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;