import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import avatar from "./avatar.jpg"
import "./style.css"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import ReviewCard from "./profileCard"
import { Hotel } from '@material-ui/icons';

function Header() {
    const userLocal = JSON.parse(localStorage.getItem('user')); 
    var user = JSON.parse(localStorage.getItem('info'));
    const [Fla, SetFla] = React.useState(false)
    const hotel = useSelector(state => state.AuthReducer)

     
    const prof =()=>{
       if(Fla===false){
           SetFla(true)
       }
       else{
           SetFla(false)
       }
    }
    return (
        <div className="header">
            <h1>FoodUniverse</h1>
            <ul className="list">
               <Link to="/" className="link"> <li>Home</li></Link> 
                <li> <a href='#Menu'>Menu</a> </li>
                <li><a href='#Footer'>Contact US</a></li>
                {
                   (hotel.restaurant!==null)?<li><Link to="/dashboard" className="link">{hotel.restaurant.restaurant}</Link></li>
                    :<li><Link to="/dashboard" className="link"> Become a Seller</Link></li>
                }
                
            </ul>
            <div className="avatar">
            {
                (userLocal)?<><Avatar onClick={prof} className="photo" alt="Remy Sharp" src={user.image} />
               {(Fla===true)?<ReviewCard Item={user}/>:""
            }</>
                :<Link to="/signin" className="link"><h1 className="buttonn">Sign In</h1></Link>
                

            }

            </div>
        </div>
    )
}

export default Header
