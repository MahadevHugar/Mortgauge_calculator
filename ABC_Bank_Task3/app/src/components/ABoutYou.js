import React from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom'
import Income from './Income';
import Mort from './Mort';

function ABoutYou() {
    const navigate=useNavigate();
    const navigateToIncome=()=>{
        navigate('/income');
        
    };
    const resetPage=()=>{
        navigate('/mortgages')
    };

    const onChange = (e) => {
        const { name } = e.target
        console.log('clicked', name)
        
    }
  return (
    <div >

<Routes>
        <Route path='/income' element={<Income/>}></Route>
        <Route path='/mortgage' element={<Mort/>}></Route>
    </Routes>
        <span1>
       <h5 className='radio1'>How many of you are applying for mortgage ?</h5>
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
      
      Just me
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
      Me & Someone else
      </label>

      <h5 className='property'>Have you found the property, you want to buy ?</h5>
      </span1><br></br>
      
      <span2 className='second'>
      <label className='yes'>
       <input
        type="radio"
        name="pink2"
        id="pink2"
        value="pin2"
        // style={{color:'pink'}}
        onChange={onChange}
        // checked={true}
      ></input>&#160; &#160;
       
      Yes
      </label>

        <label className='no'>
      <input
        type="radio"
        name="pink2"
        id="pink2"
        value="pink2"
        // style={{color:'pink'}}
        onChange={onChange}
        // checked={true}
      />&#160; &#160;
      No
      </label>
      </span2>

      <span3>
        <h5 className='how-many'>How many adults / children would be living at the property ?</h5>
<label className='zero'>
       <input
        type="radio"
        name="pink3"
        id="pink3"
        value="pin3"
        // style={{color:'pink'}}
        onChange={onChange}
        // checked={true}
      ></input>&#160; &#160;
       
      0
      </label>

        <label className='one'>
      <input
        type="radio"
        name="pink3"
        id="pink3"
        value="pink3"
        // style={{color:'pink'}}
        onChange={onChange}
        // checked={true}
      />&#160; &#160;
      1
      </label>

      <label className='two'>
      <input
        type="radio"
        name="pink3"
        id="pink3"
        value="pink3"
        // style={{color:'pink'}}
        onChange={onChange}
        // checked={true}
      />&#160; &#160;
      2
      </label>


      <label className='three'>
      <input
        type="radio"
        name="pink3"
        id="pink3"
        value="pink3"
        style={{color:'pink'}}
        onChange={onChange}
        // checked={true}
      />&#160; &#160;
      3+
      </label>
      </span3>



      <span4>
        <h5 className='how-many'>How many adults / children are financially dependent on you ?</h5>
<label className='zero'>
       <input
        type="radio"
        name="pin4"
        id="pink4"
        value="pin4"
        // style={{color:'pink'}}
        onChange={onChange}
        // checked={true}
      ></input>&#160; &#160;
       
      0
      </label>

        <label className='one'>
      <input
        type="radio"
        name="pink4"
        id="pink4"
        value="pink4"
        // style={{color:'pink'}}
        onChange={onChange}
        // checked={true}
      />&#160; &#160;
      1
      </label>

      <label className='two'>
      <input
        type="radio"
        name="pink4"
        id="pink4"
        value="pink4"
        // style={{color:'pink'}}
        onChange={onChange}
        // checked={true}
      />&#160; &#160;
      2
      </label>


      <label className='three'>
      <input
        type="radio"
        name="pink4"
        id="pink4"
        value="pink4"
        // style={{color:'pink'}}
        onChange={onChange}
        // checked={true}
      />&#160; &#160;
      3+
      </label>
      </span4>


    <span5>
    <h5 className='zip-code'> Zip Code of the property located</h5>
      <label className='zip'>
      <input
        type="text"
        id='text1'
      />&#160; &#160;
      </label>
      </span5>


      <span6>
    <h5 className='value-year-prop'> What is the estimated value of the property & tenure of repayments?</h5>
      <label className='value'>
      <input
        type="text"
        id='t1'
      />&#160; 
      &
      </label>

      <label className='year'>
      <input
        type="text"
        id='t2'
      />&#160;
      Years
      </label>
      
      <label className='month'>
      <input
        type="text"
        id='t3'
      />&#160;
      Months
      </label>
      </span6>
      <span7 className='btn-grp'>
        <button className='reset'onClick={resetPage}>Reset</button>
        <button className='next' onClick={navigateToIncome}>Next</button>
      </span7>


    
    </div>
    



  )
}

export default ABoutYou
