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
                <Posters  img ={poster1} name ='Natural Plants' description ="Nature's beauty, living artistry, tranquil serenity." />
                
            </div>
            <div className="categories-bottom-bottom">
                <Button title = 'Explore' bg = '#FFFFFF' />
            </div>
        </div>
    </div>
  )
}

export default Categories
