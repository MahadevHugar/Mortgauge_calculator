import React from 'react'
import { ReactDOM } from 'react';



const handlertHandle =()=>{
    
    alert('Thank you your Appointment has been successfully booked with ABC Bank. The meeting details have been sent to your email.');

};
    function BookAppointment() {


  return (
    <div className='book-page'>
        <h4 className='bookappo'>Book an Appointment</h4>

<span20>
        <h5 className='how-many'>How many adults / children are financially dependent on you ?</h5>
<label className='zero'>
       <input
        type="radio"
        name="pin4"
        id="pink4"
        value="pin4"
        // style={{color:'pink'}}
        // onChange={onChange}
        // checked={true}
      ></input>&#160; &#160;
       
      Mr
      </label>

        <label className='one'>
      <input
        type="radio"
        name="pink4"
        id="pink4"
        value="pink4"
        // style={{color:'pink'}}
        // onChange={onChange}
        // checked={true}
      />&#160; &#160;
      Mrs
      </label>

      <label className='two'>
      <input
        type="radio"
        name="pink4"
        id="pink4"
        value="pink4"
        // style={{color:'pink'}}
        // onChange={onChange}
        // checked={true}
      />&#160; &#160;
      Ms
      </label>
</span20>

<span9>
<h5 className='zip-codeIn11'> What is your first name ?</h5>
      <label className='zip'>
      <input
        type="text-"
        id='fname'
      />&#160; &#160;
      </label>
      </span9><br></br>

      <span9>
<h5 className='zip-codeIn11'> What is your  surname ?</h5>
      <label className='zip'>
      <input
        type="text-"
        id='fname'
      />&#160; &#160;
      </label>
      </span9><br></br>

      <span9>
<h5 className='zip-codeIn11'> What is your contact number ?</h5>
      <label className='zip'>
      <input
        type="text-"
        id='fname'
      />&#160; &#160;
      </label>
      </span9><br></br>

      <span9>
<h5 className='zip-codeIn11'> What is your email address ?</h5>
      <label className='zip'>
      <input
        type="text-"
        id='fname'
      />&#160; &#160;
      </label>
      </span9><br></br>

      <span9>
<h5 className='zip-codeIn11'> What is your date of birth ?</h5>
      <label className='zip'>
      <input
        type="text-"
        id='fname'
      />&#160; &#160;
      </label>
      </span9><br></br>

      <span9>
<h5 className='zip-codeIn11'> What is your ZIP Code ?</h5>
      <label className='zip'>
      <input
        type="text-"
        id='fname'
      />&#160; &#160;
      </label>
      </span9><br></br>

      <button className='book2' onClick={handlertHandle}
        >Book an appointment</button><br></br>

      


<div className='allimgResult9'>
      <img  className='imgResult9' src='./mort_image.png' alt='img1' />
      <div className='barResult9'>
        <div className='bar96'>

        </div>

      </div>
      <img className='imgResult9' src='./mort_image2.png' alt='img1'/>
      <div className='barResult9'>
        <div className='bar96'>
          
        </div>


     </div>
     </div>
      
    </div>
  )
  };

export default BookAppointment
