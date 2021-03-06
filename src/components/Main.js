import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGameInfo } from '../features/gameInfo';
import Game from './gameData/Game';

import '../style/main.css'
import Spinner from './Spinner';

function Main() {
    
    const userName = useSelector((state)=>state.user.value.name)
    const gameLoadingState = useSelector((state)=>state.gameInfo.value)
   
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGameInfo());

    }, [dispatch])
    

    if(gameLoadingState.loading != 'loaded' ){
     
        return <Spinner/>
    }


  

    return (
        <div className='main'>
                <div className="header">
                    <h2>Welcome to Hangman Game</h2>
                    <h2>Username: {userName}</h2>
                </div>
                <br/>
                <Game gameInfo ={gameLoadingState.gameInfo}/>
        </div>
    )
}

export default Main


