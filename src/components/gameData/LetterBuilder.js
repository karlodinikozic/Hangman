import React from 'react'
import { useSelector } from 'react-redux'
import Letter from './Letter'

function LetterBuilder(props) {

    const {sentence} = props


    return (
        <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"}}>
            {
                sentence.split("").map((el,id)=>{
                    return  <Letter letter={el} key={id}/>
                })
            }
        </div>
    )
}

export default LetterBuilder
