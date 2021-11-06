import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { initMap } from '../../features/game';
import { fetchGameInfo } from '../../features/gameInfo';
import HangMan from './HangMan';
import LetterBuilder from './LetterBuilder';
import LetterChooser from './LetterChooser';

function Game(props) {
    const {gameInfo} = props



    const dispatch = useDispatch()
  

    useEffect(()=>{
        dispatch(initMap(gameInfo.content))
    },[])


    const handleRestart = ()=>{
        dispatch(fetchGameInfo());
    }

    console.log(gameInfo.content)

    return (
        <div>
            <HangMan/>
           <LetterBuilder sentence={gameInfo.content}/>
            <br/>
            <button onClick={handleRestart}>Restart</button>

            <LetterChooser/>
        </div>
    )
}

export default Game
