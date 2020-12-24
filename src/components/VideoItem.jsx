import React from "react";
import "../style/VideoItem.css";

const VideoItem = ({ onVideoSelect, video }) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="video-item item"
    >
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
