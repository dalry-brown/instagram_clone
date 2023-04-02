import React from 'react'
import instagramLogo from'../../../../src/images/pngegg.png'
import { AiOutlineHeart, AiOutlineCaretDown } from 'react-icons/ai'
import "../../../Style/landingpage.css"
import av1 from '../../../images/av1.jpg'

const Header = () => {
  return (
    <>
        <header>
            <div className="heading">
                <h1><img src={instagramLogo} alt="instagramlogo" /></h1>
                <button><AiOutlineCaretDown/></button>
            </div>
            <div className="right">
                <input type="text" role='searchbox' placeholder='Search'/>
                <button className='headerHeart'><AiOutlineHeart/></button>
            </div>
        </header>
        <nav>
            <div className="navcontainer">
                <ul>
                    <li><li><img src={av1} alt="avatar1" /></li>Joe</li>
                    <li><li><img src={av1} alt="avatar1" /></li>Mary</li>
                    <li><li><img src={av1} alt="avatar1" /></li>Anne</li>
                    <li><li><img src={av1} alt="avatar1" /></li>Natalie</li>
                    <li><li><img src={av1} alt="avatar1" /></li>Roxie</li>
                    <li><li><img src={av1} alt="avatar1" /></li>Baloo</li>
                    <li><li><img src={av1} alt="avatar1" /></li>Badoo</li>
                    <li><li><img src={av1} alt="avatar1" /></li>Skype</li>
                    <li><li><img src={av1} alt="avatar1" /></li>Ruzo</li>
                    <li><li><img src={av1} alt="avatar1" /></li>Jamie</li>
                    <li><li><img src={av1} alt="avatar1" /></li>Ama</li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header