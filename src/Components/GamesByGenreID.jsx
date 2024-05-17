import React, { useEffect } from 'react'

function GamesByGenreID({ gameList,selectedGenresName }) {
    useEffect(() => {
        console.log("Game List", gameList)
    })
    return (
        <div className='dark:bg-black'>
            <h2 className='font-bold text-[30px] text-black dark:text-white mt-5'>{selectedGenresName} Games</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 lg:grid-cols-3'>
                {gameList.map((item) => (
                    <div className='bg-[#76a8f75e] p-3 pb-10 rounded-lg hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
                        <img src={item.background_image} className=' w-full h-[80%] rounded-xl object-cover' />
                        <h2 className='text-[20px] text-black font-bold dark:text-white'>{item.name}
                            <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">{item.metacritic}</span></h2>
                        <h2 className='text-gray-500 dark:text-gray-300'>⭐{item.rating}  💬{item.reviews_count}  🔥{item.suggestions_count}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GamesByGenreID