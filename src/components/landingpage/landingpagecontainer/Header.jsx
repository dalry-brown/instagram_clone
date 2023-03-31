import React from 'react'
import instagramLogo from'../../../../src/images/pngegg.png'
import { AiOutlineHeart, AiOutlineCaretDown } from 'react-icons/ai'
import "../../../Style/landingpage.css"

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
                    <li><li><p></p></li>name</li>
                    <li><li><p></p></li>name</li>
                    <li><li><p></p></li>name</li>
                    <li><li><p></p></li>name</li>
                    <li><li><p></p></li>name</li>
                    <li><li><p></p></li>name</li>
                    <li><li><p></p></li>name</li>
                    <li><li><p></p></li>name</li>
                    <li><li><p></p></li>name</li>
                    <li><li><p></p></li>name</li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header