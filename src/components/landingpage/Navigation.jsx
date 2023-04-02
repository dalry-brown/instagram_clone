import React from 'react'
import NavigationSuggestion from './landingpagecontainer/subcomponents/NavigationSuggestion'
import {AiFillCiCircle} from 'react-icons/ai'
import '../../Style/landingpage.css'
import av2 from '../../images/av2.jpg'

const Navigation = () => {
  return (
    <aside className='navigation'>
    <section className='commentheader'>
      <ul>
        <li><img style={{width: '3em', height: '3em', borderRadius: '50%'}} src={av2} alt="main avatar"/></li>
        <li>
          <section className="idcontainer">
            <p><span className='bold2'>hot_sammie</span></p>
            <p>Samuela Johnson</p>
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
          <NavigationSuggestion name="ab" followedby='janice' num={50}/>
          <NavigationSuggestion name='mathias' followedby='jebadan' num={23}/>
          <NavigationSuggestion name='Joey' followedby='abenaa.a' num={2.3+'k'}/>
          <NavigationSuggestion name='barou' followedby='sark223' num={72}/>
        </section>
      </section>
    </aside>
  )
}

export default Navigation