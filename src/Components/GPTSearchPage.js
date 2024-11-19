import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BODY_IMG } from "./utils/constants";

const GPTSearchPage = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          alt="body-img"
          className="opacity-95 h-screen w-screen object-cover"
          src={BODY_IMG}
        />
      </div>

      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearchPage;
