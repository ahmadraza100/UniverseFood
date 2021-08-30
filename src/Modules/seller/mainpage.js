
import { React , useState, useEffect} from 'react'
import Admin from "./sellerRegistration/index"
import Dashboard from './dashboard/Index'
import { useDispatch } from "react-redux"
import {FetchRestaurant} from "../../redux/Action/restaurantActions"
import { useSelector } from 'react-redux';

function Main() {
    const  hotel= useSelector(state => state.AuthReducer)
    const dispatch = useDispatch("");
    const [Flag, setFlag] = useState(true)

    
    useEffect(() => {
        
        document.title = "Seller | FoodUniverse"
        
    })
    if(Flag){
        dispatch(FetchRestaurant())
        setFlag(false)
      }




  
    return (
        <div>
            {
                (hotel.restaurant)?<Dashboard/>:<Admin/>
            }
        </div>
    )
}

export default Main
