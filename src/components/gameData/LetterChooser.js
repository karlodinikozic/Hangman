import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeElement } from '../../features/game'
import { isALetter } from '../../functions/gameFunctions'
import LetterButton from './LetterButton';

function LetterChooser() {
    

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));

    


    const done = useSelector(state => state.game.value.done)

    useEffect(() => {
        if(done){
            document.removeEventListener("keypress", handleKeyPress, true);
        }else{
            document.addEventListener('keypress',handleKeyPress)
        }         
    }, [done])


    
    const dispatch = useDispatch()
    const handleKeyPress = (e)=>{
        const press_letter = e.key.toLowerCase();
        if(isALetter(press_letter)){
            dispatch(changeElement(press_letter))
        } 
       
    }

    return (
        <div className="letterChooserContainer">

            <div className="letterChooser">
                {
                    alphabet.map((el,id)=>{
                        return  <LetterButton letter={el} key={id}/>
                    })
                }
            </div>
        </div>
    )
}

export default LetterChooser
