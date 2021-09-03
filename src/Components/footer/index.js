import React from 'react'
import "./style.css"
import F from "./facebook.png"
import I from "./instagram.png"
import L from "./linkedin.png"
import T from "./twitter.png"

function Footer() {
  return (
    <div className="footer">

      <div className="top">
        <div className="abt" >
          <h1>About</h1>
          <p >We are a huge group of the food system app and we serve a lot of options and offers redardings our
            services.
            <br />Hurry Up!
          </p>
        </div>

        <div className="cities" id="Footer">
          <h1>Cites</h1>
          <ul>
            <li>Lahore</li>
            <li>Karachi</li>
            <li>Islamabad</li>
            <li>Sialkot</li>
            <li>Faisalabad</li>
          </ul>
        </div>
        <div className="cities">
          <h1>Services</h1>
          <ul>
            <li>Fastfood</li>
            <li>Cuisine</li>
            <li>Biryani</li>
            <li>Desets</li>
            <li>Desi</li>
            <li>Drinks</li>
          </ul>
        </div>

        <div className="contact"> 
          <h1>Contact Us</h1>
          <ul>
            <li><a href="https://www.facebook.com/M.Ahmadshafiie"  rel="noreferrer" target="_blank"><img src={F} alt="img" style={{height:"5vw" , width:"5vw"}}/></a></li>
            <li><a href="https://instagram.com/iam_ahmademi" rel="noreferrer"  target="_blank"><img src={I} alt="img"style={{height:"5vw" , width:"5vw"}} /></a></li>
            <li><a href="https://linkedin.com/in/ahmadraza100" rel="noreferrer"  target="_blank"><img src={L} alt="img"style={{height:"5vw" , width:"5vw"}} /></a></li>
            <li><a href="https://twitter.com/SunBhaiAhmad" rel="noreferrer"  target="_blank"><img src={T} alt="img"style={{height:"5vw" , width:"5vw"}} /></a></li>
            </ul>
        </div>
      </div>
     
     <div>
       <h4>Made with ❤️  BY <a href="https://instagram.com/iam_ahmademi" rel="noreferrer" target="_blank" style={{textDecoration:"none" , color:"red"}}>Ahmad &#174;</a></h4>
     </div>
 
    </div>
  )
}

export default Footer
