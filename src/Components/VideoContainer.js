import React from "react";

import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";

const VideoContainer = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
