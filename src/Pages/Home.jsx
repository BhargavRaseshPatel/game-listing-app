import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner'
import TrendingGames from '../Components/TrendingGames'
import GamesByGenreID from '../Components/GamesByGenreID'


function Home() {
    const [allGameList, setAllGameList] = useState()
    const [gameListByGenres,setGameListByGenres] = useState([])
    const [selectedGenresName, setSelectedGenresName] = useState('Action')

    useEffect(() => {
        getAllGamesList();
        getGameListByGenresID(4)
    },[])

    const getAllGamesList = () => {
        GlobalApi.getAllGames.then((resp) => {
            console.log(resp.data.results)
            setAllGameList(resp.data.results)
        })
    }

    const getGameListByGenresID = (id) => {
        console.log("ID -> ",id)
        GlobalApi.getGameListByGenreId(id).then((resp) => {
            console.log("Game List By Genre",resp.data.results)
            setGameListByGenres(resp.data.results)
        })
    }
  return (
      <div className='grid grid-cols-4 px-8'>
        
        <div className='h-full hidden md:block'>
            <GenreList genresId={(genresId) => getGameListByGenresID(genresId)} selectedGenresName={(name) => setSelectedGenresName(name)}/></div>
        <div className='col-span-3 bg-white'>
            {allGameList?.length>0 ?
            <div>
             <Banner gameBanner={allGameList[0]}/> <TrendingGames gameList={allGameList}/> <GamesByGenreID gameList={gameListByGenres} selectedGenresName={selectedGenresName}/> </div>: null}
            </div>
    </div>
  )
}

export default Home