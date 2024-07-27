import React from 'react'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from "react-icons/tb";

import { AiFillCheckCircle } from "react-icons/ai";
import ResultData from './ResultData';

function Result() {
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
        <icon className='one'><AiFillCheckCircle size='35px' color='rgb(242,9,160)' /> </icon>
         
          &#160;
          <b>Outgoings</b>
        </li>

        <li className='fourth'>
        <img src='./Four.png' height='30px' /> &#160;
          <b>Results</b>
        </li>
      </ul>

      <ResultData/>
     

      <div className='allimgResult'>
      <img  className='imgResult' src='./mort_image.png' alt='img1' />
      <div className='barResult'>

      </div>
      <img className='imgResult' src='./mort_image2.png' alt='img1'/>
      <div className='barResult'>

      </div>
    </div>
    </div>
  )
}

export default Result
