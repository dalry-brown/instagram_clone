import React from 'react'
import NavigationSuggestion from './landingpagecontainer/subcomponents/NavigationSuggestion'
import {AiFillCiCircle} from 'react-icons/ai'
import '../../Style/landingpage.css'

const Navigation = () => {
  return (
    <aside className='navigation'>
    <section className='commentheader'>
      <ul>
        <li><AiFillCiCircle/></li>
        <li>
          <section className="idcontainer">
            <p><span className='bold2'>willie.breezy</span></p>
            <p>William Brown</p>
          </section>
          <a href="#">Switch</a>
        </li> 
      </ul>
      </section>
      <section>
        <section className='commentBody'>
          <section className="description">
            <p>Suggested for you</p>
            <a href="#"><span className='bold2'>See All</span></a>
          </section>
          <NavigationSuggestion/>
          <NavigationSuggestion/>
          <NavigationSuggestion/>
          <NavigationSuggestion/>
        </section>
      </section>
    </aside>
  )
}

export default Navigation