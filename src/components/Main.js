import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGameInfo } from '../features/gameInfo';
import Game from './gameData/Game';
import HighScore from './HighScore';


function Main() {
    
    const userName = useSelector((state)=>state.user.value.name)
    const gameLoadingState = useSelector((state)=>state.gameInfo.value)

 
    const done = useSelector(state => state.game.value.done)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGameInfo());

    }, [dispatch])
    

    if(gameLoadingState.loading != 'loaded' ){
        //TODO https://www.davidhu.io/react-spinners/
        //TODO SLIK TRANSITIONS https://css-tricks.com/animating-between-views-in-react/
        return <h1>Loading ... </h1>
    }


    if(done){
        return <HighScore/>
    }

    return (
        <div>
                <h1>Hello {userName} ! :D</h1>
                <br/>
                <Game gameInfo ={gameLoadingState.gameInfo}/>
        </div>
    )
}

export default Main
