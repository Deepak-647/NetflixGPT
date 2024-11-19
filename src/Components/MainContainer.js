import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
 
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[35%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoContainer movieId={id} />
    </div>
  );
};

export default MainContainer;
