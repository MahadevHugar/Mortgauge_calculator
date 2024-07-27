import React from 'react'
import { BsFacebook } from "react-icons/bs";
import{TfiLinkedin} from "react-icons/tfi";
import { GrInstagram, GrTwitter, GrYoutube } from "react-icons/gr";

function Footer() {
    return (
        <div className='footer'>
            
                <div className='footer-content'>
                    <div className='footer-data'>
                        <h4 className='abt'>About Us</h4>
                        <ul className='aboutus'>
                            <li>Overview<a href='#'></a></li>
                            <li>Invester Relations<a href='#'></a></li>
                            <li>News Room<a href='#'></a></li>
                            <li>Carriers<a href='#'></a></li>
                        </ul>
                    </div>

                    <div className='footer-data'>
                        <h4 className='cust'>Customer Service</h4>
                        <ul className='service'>
                            <li>Apply Online<a href='#'></a></li>
                            <li>Branch & ATM Locator<a href='#'></a></li>
                            <li>1-812-345-6789<a href='#'></a></li>
                        </ul>
                    </div>

                    <div className='footer-data'>
                        <h4 className='calc'>Calculations</h4>
                        <ul className='calculation'>
                            <li>Personal Loan EMI Calculator<a href='#'></a></li>
                            <li>Mortgage Calculator<a href='#'></a></li>
                            <li>Fixed Deposit Calculator<a href='#'></a></li>
                            <li>Home Loan Calculator<a href='#'></a></li>
                            <li>PPF Calculator<a href='#'></a></li>
                        </ul>
                    </div>

              

            </div>
            <div className='footer-bar2'>
                <div className='f2-content'>
                   
                    <div className='bottom-1'>
                    <h3>ABC Bank Website, @ 1990-2023</h3>
                    <ul className='ul-1'>
                        <li><a href='#'>Legal |</a></li>
                      
                        <li> <a href='#'>| Accessibility | </a></li>
                        <li><a href='#'>| Privacy & Security |</a></li>
                        <li><a href='#'>| Interest Based Advertising</a></li>
                    </ul>
                    </div>


                   



                </div>
                <div className='bottom-2'>
                   
                   <icon> <BsFacebook size='30px'/></icon>
                   <icon><GrInstagram size='30px'/></icon>
                   <icon><GrTwitter size='30px'/></icon>
                   <icon><GrYoutube size='30px'/></icon>
                   <icon><TfiLinkedin size='30px'/></icon>
                
                </div>
            </div>
        </div>
    )
}

export default Footer
