import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black  ">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lg w-1/3 py-8">{overview}</p>
      <div className="flex">
        <button className=" text-black bg-white p-2 px-8 rounded-lg mx-2 flex items-center hover:bg-opacity-80">
          <FaPlay className=" text-black mx-2" />
          Play
        </button>
        <button className="bg-slate-800 text-white p-2 px-8 rounded-lg mx-2 flex items-center">
          <FaInfoCircle className="text-white mx-2" />
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
