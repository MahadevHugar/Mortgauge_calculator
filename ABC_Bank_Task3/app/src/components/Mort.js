import React from 'react'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3,TbCircleNumber4  } from "react-icons/tb";
import ABoutYou from './ABoutYou';
import { Route, Routes } from 'react-router-dom';
import Income from './Income';


function Mort() {
  return (
    <div className='martgagediv'>
     <h2>Mortgage Calculator</h2>
    <ul cl>
        <li className='first'>
        {/* <icon className='one'><TbCircleNumber1 size='35px' color='#ff5050'/>
        </icon> */}
        <img src='./one.png' height='34px' />
         &#160; 
        <b>About You</b>
        </li>

        <li className='second'>
        <icon className='two'><TbCircleNumber2 size='35px' color='#bfbfbf' /></icon> &#160; 
        <b>Income</b>
        
        </li>

        <li className='third'>
        <icon className='three'><TbCircleNumber3 size='35px'color='#bfbfbf' /></icon>
        &#160; 
        <b>Outgoings</b>
        </li>

        <li className='fourth'>
        <icon className='four'><TbCircleNumber4 size='35px' color='#bfbfbf' /></icon>&#160; 
        <b>Results</b>
    
        </li>
    </ul>
    <ABoutYou/>
    <Routes>
    <Route path='income' element={<Income/>}></Route>
    </Routes>
    <div className='allimg'>
      <img  className='img1' src='./mort_image.png' alt='img1' />
      <div className='bar'>

      </div>
      <img className='img2' src='./mort_image2.png' alt='img1'/>
      <div className='bar'>

      </div>
    </div>
    </div>
  )
}

export default Mort
