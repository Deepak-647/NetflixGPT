import React from 'react'
import { useSelector } from 'react-redux'
import lang from './utils/languageConstants'

const GPTSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black '>
            <input className='p-4 m-4 w-[70%] rounded-lg' type='text' placeholder={lang[langKey].gptSearchPlacehonder}/>
            <button className='py-4 px-4 m-4 w-[20%] bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar