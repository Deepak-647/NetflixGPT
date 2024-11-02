import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "./utils/moviesSlice";

const VideoContainer = ({ movieId }) => {
    const trailerId = useSelector(store => store.movies?.movieTrailer)
    const dispatch = useDispatch();

    // const [trailerId,setTrailerId]= useState(null);

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/912649/videos",
      API_OPTIONS
    );
    const json = await data.json();
    

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    // setTrailerId(trailer.key)
    dispatch(addMovieTrailer(trailer))
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerId?.key}
        title="YouTube video player"
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
       
      ></iframe>
    </div>
  );
};

export default VideoContainer;
