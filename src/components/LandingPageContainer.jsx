import React from 'react'
import Navigation from './landingpage/Navigation'
import Main from './landingpage/Main'
import Bar from './landingpage/landingpagecontainer/Bar'

const LandingPageContainer = () => {
  return (
    <div className="landingpagecontainer">
        <Navigation/>
        <Main/>
        <Bar/>
    </div>
  )
}

export default LandingPageContainer