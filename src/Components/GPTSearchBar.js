import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "./utils/languageConstants";
// import openai from "./utils/openAi";
import { API_OPTIONS } from "./utils/constants";
import { addGptMovieResults } from "../Components/utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptMovies = "Iron Man, SuperMan, Avengers, Raaz, Hera Pheri, Don, Karan Arjun, Hulk, Black Panther".split(","
    );

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    
    dispatch(addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="flex justify-center pt-20 md:pt-10 px-4">
      <form className="w-full max-w-2xl flex bg-black p-2 md:p-3 rounded-lg shadow-lg" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="flex-grow p-2 md:p-3 rounded-l-lg text-black focus:outline-none"
          type="text"
          placeholder={lang[langKey].gptSearchPlacehonder}
        />
        <button
          className="bg-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-r-lg hover:bg-red-800 transition"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
