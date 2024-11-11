import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black '>
            <input className='p-4 m-4 w-[70%] rounded-lg' type='text' placeholder='what would you like to watch ?'/>
            <button className='py-4 px-4 m-4 w-[20%] bg-red-700 text-white rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar