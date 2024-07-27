import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
        const[active, setActive]=useState(false)
        const handleClick=()=>{
                setActive(!active);
                
        };
  return (
    <div className='nav-div'>
     <nav className='nav-bar'>
        
            
                <Link to={'/'} className='nav-link' >
                        Home
                </Link>
        
                <Link to={'/'} className='nav-link' >
                        Accounts
                </Link>
      
       
                <Link to={'/'} className='nav-link' >
                        Credit Cards
                </Link>
         
       
                <Link to={'/mortgage'}  className='nav-link'  onClick={handleClick}
                style={{backgroundColor:active? "rgb(242, 9, 160)" :'white'}}>
                        Mortgages
                </Link>
         
       
                <Link  to={'/'} className='nav-link' >
                        Loans
                </Link>
         
       
                <Link to={'/'} className='nav-link' >
                        Investments
                </Link>
         
       
                <Link to={'/'}  className='nav-link' >
                        Rewards
                </Link>
         
      
     </nav>
    </div>
  )
}

export default NavBar
