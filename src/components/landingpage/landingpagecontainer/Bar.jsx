import React from 'react'
import '../../../Style/landingpage.css'
import instagramLogo from'../../../../src/images/pngegg.png'
import {BiVideo} from 'react-icons/bi'
import {AiOutlineHome, AiOutlineMessage, AiOutlinePlusSquare, AiFillCiCircle, AiOutlineSearch, AiOutlineCompass, AiOutlineHeart, AiOutlineMenu, AiOutlineInstagram} from 'react-icons/ai'

const Bar = () => {
  return (
    <footer>
        <ul>
            <li className='insta'><AiOutlineInstagram className='instaIcon'/><span className='instatext'><img src={instagramLogo} alt="instagramlogo" /></span></li>
            <li><AiOutlineHome strokeWidth="8"/><span className='labels'>Home</span></li>
            <li className='search'><AiOutlineSearch/><span className='labels'>Search</span></li>
            <li><AiOutlineCompass/><span className='labels'>Explore</span></li>
            <li><BiVideo/><span className='labels'>Reels</span></li>            
            <li><AiOutlineMessage/><span className='labels'>Messages</span></li>
            <li className='heart'><AiOutlineHeart/><span className='labels'>Notification</span></li>            
            <li><AiOutlinePlusSquare/><span className='labels'>Create</span></li>
            <li className="avatar"><AiFillCiCircle/></li>
            <li className='menu'><AiOutlineMenu/><span className='labels'>More</span></li>
        </ul>
    </footer>
  )
}

export default Bar