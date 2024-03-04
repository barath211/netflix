import React from 'react'
import SavedShows from '../Components/SavedShows'
const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img 
   className=' w-full h-[500px] object-cover'
   src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png" alt="/" />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[650px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
<h1 className='text-3xl md:text-5xl font'>MY SHOWS</h1>
    </div>
    </div>
    <SavedShows />
    </>
  )
}

export default Account