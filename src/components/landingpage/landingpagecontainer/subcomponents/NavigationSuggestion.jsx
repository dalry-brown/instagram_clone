import React from 'react'
import "../../../../Style/landingpage.css"
import {AiFillCiCircle} from 'react-icons/ai'

const NavigationSuggestion = () => {
  return (
    <section className='suggestion'>
        <ul>
        <li><AiFillCiCircle/></li>
        <li>
            <section className="idcontainer">
            <p><span className='bold2'>willie.breezy</span></p>
            <p style={{color: 'gray'}}>Followed by aljazeera... <span style={{fontWeight: '900'}}>. </span>23 more</p>
            </section>
            <a href="#">Follow</a>
        </li> 
        </ul>
    </section>
  )
}

export default NavigationSuggestion