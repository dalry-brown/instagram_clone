import React from 'react'
import '../../../../Style/landingpage.css'
import { AiFillCiCircle, AiOutlineEllipsis, AiOutlineHeart, AiFillHeart, AiOutlineMessage, AiOutlineSend, AiOutlineBook } from 'react-icons/ai'


const Post = ({posts}) => {

const heartfill = {
    color: 'red'
}
  return (
    <>
        {
            posts.map(post => (
                <div className="cardcontainer">
                <section className='posthead'>
                    <section className='right'>
                        <p><AiFillCiCircle/></p>
                        <section className="userntime">
                            <h2><span className='bold2'>{post.username}</span> <span style={{fontWeight: '900'}}>.</span> {post.lastseen}</h2>
                        </section>
                    </section>
                    <section><AiOutlineEllipsis/></section>
                </section>
                <section className='bodyandfooter'>
                    <section className='postbody'>
                        <section className='maincontent'>
                            <img src={post.imgvid} alt="post" />
                        </section>
                    </section>
                    <section className='postfooter'>
                        <section className='row1'>
                            <section className='left'>
                                {post.heartActive ? <span onClick={() => {}} className={heartfill}><AiFillHeart/></span> :<AiOutlineHeart/>}
                                <AiOutlineMessage/>
                                <AiOutlineSend/>
                            </section>
                            <section className='right'>
                                <AiOutlineBook/>
                            </section>
                        </section>
                        <section className='row2'>
                            <span>
                                <AiFillCiCircle/>
                                <AiFillCiCircle/>
                            </span>
                            <p>Liked by <span className='bold'>.{post.lastLike}</span> and <span className='bold'>{post.likeNum - 1} others</span></p>
                        </section>
                        <section className='row3'>
                            <p><span className='bold'>{post.commentor}</span> {post.comment}</p>
                        </section>
                        <section className='row4'>
                            <p style={{cursor: 'pointer'}}>View all comments</p>
                        </section>
                    </section>
                </section>
            </div>
            ))
        }
    </>
  )
}

export default Post