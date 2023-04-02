import React from 'react'
import "../../../../Style/landingpage.css"
import {AiFillCiCircle} from 'react-icons/ai'

const NavigationSuggestion = ({name, followedby, num}) => {
  return (
    <section className='suggestion'>
        <ul>
        <li><AiFillCiCircle/></li>
        <li>
            <section className="idcontainer">
            <p><span className='bold2'>{name}</span></p>
            <p style={{color: 'gray'}}>Followed by {followedby}... <span style={{fontWeight: '900'}}>. </span>{num} more</p>
            </section>
            <a href="#">Follow</a>
        </li> 
        </ul>
    </section>
  )
}

export default NavigationSuggestion