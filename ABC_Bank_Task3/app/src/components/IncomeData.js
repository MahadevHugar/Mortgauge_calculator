import React from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom'

function IncomeData() {
    const navigate=useNavigate();
  const navigateToOutGoings=()=>{
      navigate('/outgoing');
      
  };
 

  const onChange = (e) => {
      const { name } = e.target
      console.log('clicked', name)
      
  };
  return (
    <div>
        
       <span1>
       <h5 className='radio1'>What is your employment status?</h5>
       <label className='me'>
       <input
        type="radio"
        name="pink"
        id="pink1"
        value="pink"
        // style={{color:'pink'}}
        onChange={onChange}
        // checked={true}
      ></input>&#160; &#160;
      
      Employed
      </label>

        <label className='me-else'>
      <input
        type="radio"
        name="pink"
        id="pink1"
        value="pink"
        // style={{color:'pink'}}
        onChange={onChange}
        // checked={true}
      />&#160; &#160;
      Self-Employed 
      </label>
      </span1><br></br>


      <span9>
    <h5 className='zip-codeIn1'> What is your annual income , before tax?</h5>
      <label className='zip'>
      <input
        type="text-income"
        id='text1-income'
      />&#160; &#160;
      </label>
      </span9><br></br>


      <span9>
    <h5 className='zip-codeIn'>Are you paid any extra bonuses on top of your basic income? if yes,<br></br> tell
    us the yearly total of your bounus amount before tax.</h5>
      <label className='zip'>
      <input
        type="text-income1"
        id='text1-income1'
      />&#160; &#160;
      </label>
      </span9><br></br>



      
   <span8 className='btn-grp1'>
        <button className='reset1' >Reset</button>
        <button className='next1' onClick={navigateToOutGoings}>Next</button>
      </span8>
      
    </div>
  )
}

export default IncomeData
