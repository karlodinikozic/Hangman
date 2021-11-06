import React from 'react'
import { useSelector } from 'react-redux'
import { isALetter } from '../../functions/gameFunctions'

function Letter(props) {

    const {letter} =  props
    const gameMap = useSelector((state)=>state.game.value.mapa)

    const LetterModified = ({letter})=>{
        if(isALetter(letter)){
            return <div className='letter'> 
                {/* <div hidden={gameMap[letter]}>{letter}</div> */}
                <div style={{opacity: gameMap[letter.toLowerCase()]?1:0.2}}>{letter}</div>
                
            </div>
        }
        else if(letter == " "){
            
           return <span style={{opacity:0}}>pa</span>
        }
        return<div>{letter}</div>
    }


    return (
        <div  style={{marginRight:"4px",textAlign:"center"}}>
            <LetterModified letter={letter}/>
            
        </div>
    )
}

export default Letter
