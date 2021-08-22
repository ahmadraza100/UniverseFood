import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import avatar from "./avatar.jpg"
import "./style.css"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <h1>FoodUniverse</h1>
            <ul className="list">
               <Link to="/" className="link"> <li>Home</li></Link> 
                <li> <a href='#Menu'>Menu</a> </li>
                <li><a href='#Footer'>Contact US</a></li>
                <li>Become a seller</li>
            </ul>
            <div className="avatar">
            <Avatar className="photo" alt="Remy Sharp" src={avatar} />
            <p>Ahmad</p>

            </div>
        </div>
    )
}

export default Header
