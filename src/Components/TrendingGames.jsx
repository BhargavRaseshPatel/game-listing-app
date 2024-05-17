import React, { useEffect } from 'react'

function TrendingGames({ gameList }) {

  useEffect(() => {
    console.log(gameList)
  })
  return (
    <div className='bg-white dark:bg-black'>
      <div className='mt-5 hidden md:block'>
        <h2 className='font-bold text-[30px] dark:bg-black text-black  dark:text-white'>Trending Game</h2>
      </div>
      <div className=' md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-5'>
        {gameList.map((item, index) => index < 4 && (
          <div key={index} className='bg-[#76a8f75e] rounded-lg group
          hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
            <img src={item.background_image} className='h-[270px] rounded-t rounded-lg object-cover' />
            <h2 className='dark:text-white text-black text-[20px] font-bold p-2'>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingGames