import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";

function Header() {
  return (
    <div>
    <div className='logobar'>
        <img src='./ABCBank_Logo.png' alt='logo' className='logo-img'/>
        <a href='#'>
            <span className='locate'>
       <FaMapMarkerAlt size='26px'  color='#fff'/>    Locate Us
       </span>
        </a>
        <button className='btn'>Sign In</button>
    </div>


    </div>
  )
}

export default Header
