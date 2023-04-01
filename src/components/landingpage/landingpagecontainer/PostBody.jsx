import React from 'react'
import { useState } from 'react'
import '../../../Style/landingpage.css'
import Post from './subcomponents/Post'
import postimg1 from '../../../images/postimg1.jpg'
import postimg2 from '../../../images/postimg2.jpg'
import postimg3 from '../../../images/postimg3.jpg'

const PostBody = () => {

    const [posts, setPosts] = useState([
        {
            username: 'lady_k',
            lastseen: '6hrs',
            imgvid: `${postimg1}`,
            heartActive: false,
            messageActive: false,
            saveActive: false,
            lastLike: "Benji",
            likeNum: 20,
            commentor: 'mumzy_73',
            comment: "Such a beatiful family"
        },
        {
            username: '__majeed',
            lastseen: '21hrs',
            imgvid: `${postimg2}`,
            heartActive: false,
            messageActive: false,
            saveActive: false,
            lastLike: "zaza.peace",
            likeNum: 90,
            commentor: 'sally_mendy',
            comment: "Ohh the beautiful dance of Agbaja"
        },
        {
            username: 'baloo',
            lastseen: '20mins',
            imgvid: `${postimg3}`,
            heartActive: false,
            messageActive: false,
            saveActive: false,
            lastLike: "wisdom",
            likeNum: 1001,
            commentor: 'richarlison_wise',
            comment: "Accra's number rapper, Baloooo"
        }
    ])

  return (
    <div className="card">
        <Post posts={posts}/>
    </div>
  )
}

export default PostBody