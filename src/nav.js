import React from 'react'
import { render } from '@testing-library/react'
import staticDashboardData from "./data"


function NavBar(props){
    
    return(
        <nav>
        {props.content.map(item=> <li>{item}</li>)}
        </nav>
    )
}

export default NavBar