import React from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom'

function OutGoingData() {
    const navigate=useNavigate();
    const navigateToResults=()=>{
        navigate('/result');
        
    };
   
  
    const onChange = (e) => {
        const { name } = e.target
        console.log('clicked', name)
        
    };
    return (
        <div>
            <span10>
                <h5 className='radio1'>Are you paying off any credit cards at the moment ?</h5>
                <label className='me1'>
                    <input
                        type="radio"
                        name="pink3"
                        id="pink3"
                        value="pink"
                        onChange={onChange}
                    ></input>&#160; &#160;

                    Yes
                </label>

                <label className='me-else1'>
                    <input
                        type="radio"
                        name="pink3"
                        id="pink3"
                        value="pink"
                        onChange={onChange}
                    />&#160; &#160;
                    No
                </label>
            </span10><br></br>


            <span11>
                <h5 className='radio1'>Are you paying off any loans at the moment ?</h5>
                <label className='me1'>
                    <input
                        type="radio"
                        name="pink4"
                        id="pink4"
                        value="pink"
                        onChange={onChange}
                    ></input>&#160; &#160;

                    Yes
                </label>

                <label className='me-else1'>
                    <input
                        type="radio"
                        name="pink4"
                        id="pink4"
                        value="pink"
                        onChange={onChange}

                    />&#160; &#160;
                    No
                </label>
            </span11><br></br>


            <span12>
                <h5 className='radio1'>Any regular expenses apart from credit cards and loans ?</h5>
                <label className='me1'>
                    <input
                        type="radio"
                        name="pink5"
                        id="pink5"
                        value="pink"
                        onChange={onChange}
                    ></input>&#160; &#160;

                    Yes
                </label>

                <label className='me-else1'>
                    <input
                        type="radio"
                        name="pink5"
                        id="pink5"
                        value="pink"

                        onChange={onChange}

                    />&#160; &#160;
                    No
                </label>
            </span12><br></br>


            <span8 className='btn-grp4'>
                <button className='reset2' >Reset</button>
                <button className='next2' onClick={navigateToResults}>Next</button>
            </span8>

        </div>

    )
}

export default OutGoingData
