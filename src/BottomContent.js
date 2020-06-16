import React from 'react'
import CardsGen from "./CardsGen"

function BottomContent(props){
    return(
    <div className="Bot">Website Visitors
    <CardsGen content={props.content}/>
    </div>
    )
}

export default BottomContent