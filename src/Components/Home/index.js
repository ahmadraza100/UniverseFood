import React from 'react'
import "./style.css"
import Img from "./back.png"

function Home() {
    return (
        <div className="home">
            <h1><span className="color">Fastest</span> <br/> Delivery &amp;<br/> Easy <span className="color">Pickup</span></h1>
            
            <img src={Img} alt="img" style={{width:"30vw" , height:"30vw"}}/>
        </div>
    )
}

export default Home
