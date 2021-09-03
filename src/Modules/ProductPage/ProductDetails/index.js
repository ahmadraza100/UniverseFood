import { React } from 'react'
import { useSelector } from "react-redux"
import "./index.css"

import ControlCard from "./card"
import PersonIcon from '@material-ui/icons/Person';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router';
















function Details() {
    const hotel = useSelector(state => state.AuthReducer)
     const history = useHistory()
    // const dispatch = useDispatch("");





    return (
        (hotel.restaurant !== null) ?
            <div className="roottt">
                <h1>{hotel.restaurant.restaurant} </h1>
                <div className="rootttt">
                    <h1 onClick={()=>history.push("/#Menu")}><KeyboardBackspaceIcon/> Back to Page</h1>
                    <div className="coverr">
                        <img src={hotel.restaurant.cover} alt="cover" style={{ width: "50vw", height: "33vw", borderRadius: '2vw' }} />
                        <div className="info">
                            <h1>SELLER INFORAMATION</h1>
                        <h3><PersonIcon/> {hotel.restaurant.owner}</h3>
                        <h3><PhoneAndroidIcon/> 0{hotel.restaurant.contact}</h3>
                        </div>
                    </div>
                    <div className="products">
                        <h1>Products</h1>
                        <div className="Productt">
                            {

                                (hotel.dishes) ? hotel.dishes.map((dish) => {
                                    return <ControlCard Data={dish} />
                                }) : ""
                            }


                        </div>

                    </div>
                </div >
            </div> : ""
    )
}

export default Details
