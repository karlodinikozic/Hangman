import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeElement } from '../../features/game'

function LetterButton(props) {
    const {letter} = props

    const gameMap = useSelector((state)=>state.game.value.mapa)
    const dispatch = useDispatch()

    const handleOnButtonPress = ()=>{
        dispatch(changeElement(letter.toLowerCase()))
    }

    return (
        <div className="letterButton" style={{opacity:gameMap[letter.toLowerCase()]?'0':'1'}}>
            <button  onClick={handleOnButtonPress} >{letter}</button>
        </div>
    )
}

export default LetterButton
