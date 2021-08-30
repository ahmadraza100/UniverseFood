import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import "./style.css"
import {useDispatch} from "react-redux"
import {doLogout} from  "../../redux/Action/AuthAction"

function ReviewCard({Item}) {
    const dispatch = useDispatch("");

    const logout= ()=>{
    
       dispatch(doLogout())
       window.location.reload(false);


    }
    return (
        <div className="cardprofile">
            <div className="Profilee">
            <Avatar  alt="Remy Sharp" src={Item.image} style={{height:"14vh" , width:"14vh" , border:".5vh solid white" , marginBottom:"2vh"}}/>
            <h4>{Item.name}</h4>
            </div>
            <div className="location">
            <h6>{Item.location}</h6>
            <h4 onClick={logout}>Logout</h4>
            </div>

        </div>
    )
}

export default ReviewCard
