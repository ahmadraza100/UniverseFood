import React from 'react'
import Order from "./order.png"
import Delivery from "./delivery.png"
import Quality from "./quality.png"
import "./index.css"

function About() {
    return (
        <div className="about">

            <div className="abtt">
            <h4>What We Serve</h4>
            <h1>Your Favorite Food <br /> Delivery Partner</h1>


            </div>

            <div className="services">
                <div className="cards">
                    <img src={Order} alt="img" style={{ width: "7vw", height: "7vw" }} />
                    <h2>Easy to Order</h2>
                    <p className="Details">We provide easy order service in order to save the time of our customers</p>
                </div>
                <div className="cards">
                    <img src={Delivery} alt="img" style={{ width: "7vw", height: "7vw" }} />
                    <h2>Extra Fast Delivery </h2>
                    <p className="Details">We provide Extra fast service to our customers door by door in consistent way</p>
                </div>
                <div className="cards">
                    <img src={Quality} alt="img" style={{ width: "7vw", height: "7vw" }} />
                    <h2>Best Quality Food</h2>
                    <p className="Details">We provide best quality food according to the requirements of the customer</p>
                </div>
            </div>


        </div>
    )
}

export default About
