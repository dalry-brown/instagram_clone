import React from 'react'
import '../../../Style/landingpage.css'
import Post from './subcomponents/Post'

const PostBody = () => {
  return (
<div className="card">
    <Post/>
    <Post/>
    <Post/>
</div>
  )
}

export default PostBody