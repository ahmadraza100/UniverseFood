import {React , useEffect} from 'react'
import "./style.css"
import Img from "./back.png"

function Home() {
    useEffect(() => {
        
        document.title = "Home | FoodUniverse"
      })
  
    return (
        <div className="home">
            <h1><span className="color">Fastest</span> <br/> Delivery &amp;<br/> Easy <span className="color">Pickup</span></h1>
            
            <img src={Img} alt="img" style={{width:"40vh" , height:"40vh"}}/>
        </div>
    )
}

export default Home
