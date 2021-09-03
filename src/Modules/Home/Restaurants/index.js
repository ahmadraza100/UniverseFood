import React from 'react'
import MediaCard from "./card.js"
import "./style.css"
import { FetchRestaurants } from '../../../redux/Action/restaurantActions.js'
import { useSelector , useDispatch } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';

function Restaurant() {
    const hotel = useSelector(state => state.AuthReducer)
    const dispatch = useDispatch("");
    const [flag, setflag] = React.useState(true)

    if(flag){
        dispatch(FetchRestaurants())
        setflag(false)
    }

  


    return (
        <div className="restaurants" id='Menu'>
            <div className="restaurant">
                <h1><span className="HIGH">Our</span> Best &amp; Top Restaurants</h1>
            </div>
            <div className="card">
                {
                (hotel.restaurants!==null)?hotel.restaurants.map((element) => {
                    return (element!==undefined)?<MediaCard Data={element} />:<CircularProgress/>
                }):<CircularProgress/>
                }
        

            </div>
        </div>
    )
}

export default Restaurant
