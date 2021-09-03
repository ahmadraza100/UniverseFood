import React from 'react'
import And from "./icon.png"
import App from "./apple.png"
import "./style.css"

function Download() {
    return (
        <div className="downloadd">
            
            <h1>Download Now!</h1>
            <p>Abhi Download Karky Order Karein</p>
            <div className="bt">
                <img src={And} alt="Android" style={{ margin:"2vw 2vw"}} />
                <img src={App} alt="Apple"  style={{ margin:"2vw 2vw"}}/>
            </div>
          
        </div>
    )
}

export default Download
