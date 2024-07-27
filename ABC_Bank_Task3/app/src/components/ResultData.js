import React from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom'

function ResultData() {
    const navigate=useNavigate();
    const navigateToBookAnAppointment=()=>{
        navigate('/bookAppointment');
        
    };
   
  
    const onChange = (e) => {
        const { name } = e.target
        console.log('clicked', name)
        
    };
  return (
    <div>
    <h5 className='result-h5'>Based on all yours details, the amount you could borrow is up to</h5>
        <p className='amount'> <span className='amt'>$ 512,250 </span> <span28>over 20 years </span28> </p>
        <h5 className='what-next'>What would you like to do next ?</h5>

        <span8 className='btn-result'>
       
        <button className='book'  onClick={navigateToBookAnAppointment}
        >Book an appointment</button><br></br>
        <button className='explore' >Next</button>
      </span8>

    </div>

  )
}

export default ResultData
