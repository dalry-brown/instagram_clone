import React from 'react'
import Header from './landingpagecontainer/Header'
import PostBody from './landingpagecontainer/PostBody'
import '../../Style/landingpage.css'

const Main = () => {
  return (
    <main className='mainContainer'>
        <Header/>
        <PostBody/>
    </main>
  )
}

export default Main