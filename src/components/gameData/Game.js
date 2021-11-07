import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { initMap } from '../../features/game';
import { fetchGameInfo } from '../../features/gameInfo';
import HangMan from './HangMan';
import LetterBuilder from './LetterBuilder';
import LetterChooser from './LetterChooser';


function Game(props) {
    const {gameInfo} = props


    const errors = useSelector(state => state.game.value.errors)
    
    const done = useSelector(state => state.game.value.done)

    const dispatch = useDispatch()
  

    useEffect(()=>{
        dispatch(initMap(gameInfo.content))
    },[])


    const handleRestart = ()=>{
        dispatch(fetchGameInfo());
    }

   if(done){
    return <Redirect to="/highscore" />
   }

    return (
        <div className="game">
            <div className="hangman">
                <HangMan/>
                <div className="showError">
                    <h2>Number of errors: </h2>
                    <h1>{errors}</h1>
                </div>
            </div>
      
           <LetterBuilder sentence={gameInfo.content}/>
            
         
            <LetterChooser/>

            <div className="restartButton">
            <button onClick={handleRestart}><img src="https://img.icons8.com/ios-filled/100/000000/restart--v1.png"/></button>
            </div>
        </div>
    )
}

export default Game
