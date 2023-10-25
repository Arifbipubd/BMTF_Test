/** @format */

import React from "react";

const VideoGallery = ({ data }) => (
  <div className='video-card'>
    <h3>{data.name}</h3>
    <iframe width='420' height='280' src={data.url}></iframe>
  </div>
);

export default VideoGallery;
