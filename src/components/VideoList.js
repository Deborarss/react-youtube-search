import VideoItem from './VideoItem';
import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
  // console.log(videos);

  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
