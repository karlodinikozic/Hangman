import React from 'react'
import DotLoader from 'react-spinners/DotLoader'
import '../style/main.css'


function Spinner() {
    return (
        <div className="main spinner">    
            <DotLoader color={"rgb(48, 107, 216)"} size={150} />
        </div>
    )
}

export default Spinner
