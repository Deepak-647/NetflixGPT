import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BODY_IMG } from './utils/constants'

const GPTSearchPage = () => {
  return (
    <div>
        <img
          alt="body-img"
          className="absolute opacity-95 -z-10"
          src= {BODY_IMG}
        />
      <GPTSearchBar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearchPage