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

  //For each movie i will search TMDB API
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //make an api call to GPT Ai and get movie results
    // const gptQuery =
    //   "Act as a Movie Recommendation System and suggest some movies for the  query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 Movies , with comma separated movie names";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices?.[0]?.message?.content);

    //Do this when subscribe to OPENAI
    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")

    const gptMovies = "Iron Man, SuperMan, Avengers, Raaz, Hera Pheri, Don, Karan Arjun, Hulk, Black Panther".split(
      ","
    );

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);

    dispatch(addGptMovieResults({movieNames : gptMovies , movieResults:tmdbResults}));
  };
  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form className="md:w-1/2 py-1 md:py-0 bg-black flex" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="p-1 md:p-4 m-3 md:m-4  w-[80%] md:w-[70%] rounded-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlacehonder}
        />
        <button
          className="py-4 md:px-4 md:m-4 my-3  w-[20%] bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;


