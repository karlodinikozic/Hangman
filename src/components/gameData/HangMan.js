import React from 'react'
import { useSelector } from 'react-redux'



function HangMan() {

    
    const errors = useSelector(state => state.game.value.errors)
    return (
        <div style={{maxWidth:"300px", maxHeight:"300px"}}> 
        <svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" >
            <rect fill="#053544" width="10" height="400" x="20" y="0" stroke = "rgb(0,0,0)" />
            <rect fill="#053544" width="300" height="10" x="20" y="0" stroke = "rgb(0,0,0)"  />
            <rect fill="#053544" width="300" height="10" x="0" y="400" stroke = "rgb(0,0,0)" />
            <line x1="290" y1 = "0" x2="290" y2 = "80" stroke = "rgb(0,0,0)"/>
            
            {/* hangman body  */}

            {/* Head */}
            <circle cx="290" cy="80" r="40" stroke={errors>0?'black':'white'} strokeWidth="3" fill="white" />
            
            {/* torso */}
            <rect fill={errors>1?'black':'white'} width="10" height="120" x="285" y="120"  stroke={errors>1?'black':'white'}  />

            {/* lefthand */}
            <line x1="290" y1 = "120" x2="180" y2 = "180" stroke={errors>2?'black':'white'} strokeWidth="5" />

            {/* righthand */}
            <line x1="290" y1 = "120" x2="400" y2 = "180" stroke = {errors>3?'black':'white'} strokeWidth="5" />


            
            {/* righfoot */}
            <line x1="290" y1 = "240" x2="400" y2 = "350" stroke ={errors>4?'black':'white'} strokeWidth="7" />


            
            {/* leftfoot */}
            <line x1="290" y1 = "240" x2="190" y2 = "350" stroke = {errors>5?'black':'white'} strokeWidth="7" />

        </svg>
        </div>
    )
}

export default HangMan
