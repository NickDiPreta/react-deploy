import React from 'react'

function MultiCard(props){
    
    return(
        <p>{props.content.map(item=> <li>${item}</li>)}</p>
    )
}

export default MultiCard