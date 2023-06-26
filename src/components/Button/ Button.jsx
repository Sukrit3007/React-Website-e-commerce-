import React from 'react'
import './Button.css'
import { ArrowRight } from 'phosphor-react'
export const  Button = (props) => {
  return (
    <div className="button"style={{background:props.bg}}>
        <button type='button'>
            <div className="button-text">{props.title} </div>
        </button>
        <ArrowRight size={32} className='arrow'/> 
    </div>
  )
}
