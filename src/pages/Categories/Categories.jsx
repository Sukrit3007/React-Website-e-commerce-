import React from 'react'
import './Categories.css'
import { Button } from '../../components/Button/ Button'
import { Posters } from '../../components/Posters/Posters'
// import { POSTER } from '../../Poster'
import poster1 from '../Poster-Images/poster1.png'
import poster2 from '../Poster-Images/poster2.png'
import poster3 from '../Poster-Images/poster3.png'


function Categories() {
  return (
    <div className='categories-main'>
        <div className="categories-top">
            <h1>Categories</h1>
            <p>Find what you are looking for</p>
        </div>
        <div className="categories-bottom">
            <div className="categories-bottom-top">
                <div className="p1">
                    <Posters img ={poster1} name ='Natural Plants' description ="Nature's beauty, living artistry, tranquil serenity." />
                </div>
                <div className="p2">
                    <Posters className='p2' img={poster2} name ="Plant Accessories" description =" Elevate your greenery with stylish accessories." />
                    <Button title = 'Explore' bg = '#FFFFFF' />
                </div>
                <div className="p3">
                    <Posters className='p3' img={poster3} name ="Artificial Plants" description ="Timeless greenery, no upkeep required." />
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Categories
