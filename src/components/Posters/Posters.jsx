import React from 'react'
import './Posters.css'

export const Posters = (props) => {
  return (
    <div className="plant-poster">
        <div className="plant-poster-img">
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
        </div>
        <p>{props.description}</p>
    </div>
  )
}
