import React from 'react'
import '../../../../Style/landingpage.css'
import { AiFillCiCircle, AiOutlineEllipsis, AiOutlineHeart, AiOutlineMessage, AiOutlineSend, AiOutlineBook } from 'react-icons/ai'


const Post = () => {
  return (
        <div className="cardcontainer">
        <section className='posthead'>
            <section className='right'>
                <p><AiFillCiCircle/></p>
                <section className="userntime">
                    <h2><span className='bold2'>Usern_name</span> <span style={{fontWeight: '900'}}>.</span> 16hrs</h2>
                </section>
            </section>
            <section><AiOutlineEllipsis/></section>
        </section>
        <section className='bodyandfooter'>
            <section className='postbody'>
                <section className='maincontent'></section>
            </section>
            <section className='postfooter'>
                <section className='row1'>
                    <section className='left'>
                        <AiOutlineHeart/>
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
                    <p>Liked by <span className='bold'>.addriene</span> and <span className='bold'>84 others</span></p>
                </section>
                <section className='row3'>
                    <p><span className='bold'>_n.ais_</span> Lorem ipsum dolor sit amet</p>
                </section>
                <section className='row4'>
                    <p>View all comments</p>
                </section>
            </section>
        </section>
    </div>
  )
}

export default Post