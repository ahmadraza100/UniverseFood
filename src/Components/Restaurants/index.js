import React from 'react'
import MediaCard from "./card.js"
import "./style.css"

function Restaurant() {
    return (
        <div className="restaurants" id='Menu'>
            <div className="restaurant">
                <h1><span className="HIGH">Our</span> Best &amp; Top Restaurants</h1>
            </div>
            <div className="card">
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />

            </div>
        </div>
    )
}

export default Restaurant
