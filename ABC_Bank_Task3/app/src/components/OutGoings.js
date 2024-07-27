import React from 'react'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from "react-icons/tb";

import { AiFillCheckCircle } from "react-icons/ai";
import OutGoingData from './OutGoingData';

function OutGoings() {
  return (
    <div>
        <h2>Mortgage Calculator</h2>
      <ul cl>
        <li className='first'>
          <icon className='one'><AiFillCheckCircle size='35px' color='rgb(242,9,160)' />
          </icon>
          {/*  */}
          &#160;
          <b>About You</b>
        </li>

        <li className='second'>
          {/* <icon className='two'><TbCircleNumber2 size='35px' color='#bfbfbf' /></icon>  */}
          <icon className='one'><AiFillCheckCircle size='35px' color='rgb(242,9,160)' /> </icon>
          
          &#160;
          <b>Income</b>

        </li>

        <li className='third'>
          {/* <icon className='three'><TbCircleNumber3 size='35px' color='#bfbfbf' /></icon> */}
          <img src='./Three.png' height='33px' />
          &#160;
          <b>Outgoings</b>
        </li>

        <li className='fourth'>
          <icon className='four'><TbCircleNumber4 size='35px' color='#bfbfbf' /></icon>&#160;
          <b>Results</b>
        </li>
      </ul>
      <OutGoingData/>

      <div className='allimgOut'>
      <img  className='imgOut' src='./mort_image.png' alt='img1' />
      <div className='barOut'>

      </div>
      <img className='imgOut' src='./mort_image2.png' alt='img1'/>
      <div className='barOut'>

      </div>
    </div>
    </div>
  )
}

export default OutGoings
