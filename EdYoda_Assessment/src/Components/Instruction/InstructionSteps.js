import React from 'react'
import JobLogo from "../Asset/Jobs.png"
import Live from "../Asset/live.png"
import Clock from "../Asset/colck.png"
import ScolarShip from "../Asset/scolar.png"
import Ad from "../Asset/add.png"
import './Style.css'

export default function InstructionSteps() {
  return (
    <>
      <div className='HeadingCourses'>
        Access curated  Courses worth &#8377; <span className='costDown'>18,500</span> 
        &nbsp; at just <span className='rupees'> &#8377; 99</span> per year!
      </div>
      <div className='job'>
        <img className='instructionLogo' src={JobLogo} alt='job'/>
        <span className='JobText'>
        <span className='rupees'> 100+</span> &nbsp; Job relevant courses
        </span>
      
      </div>
      <div className='contant'>
      <img className='instructionLogo' src={Clock} alt='job'/>
      <span className='JobText'>
      <span className='rupees'>  20,000+</span> &nbsp; Hours of content
      </span>
      </div>
      <div className='webnir'>
      <img className='instructionLogo' src={Live} alt='job'/>
      <span className='JobText'>
      <span className='rupees'>  Exclusive</span> &nbsp; webnir access
      </span>
      </div>
      <div className='scolarship'>
      <img className='instructionLogo' src={ScolarShip} alt='job'/>
      <span className='JobText'>
       scolarship worth &nbsp;<span className='rupees'> &#8377; 94,500</span> 
      </span>
      </div>
      <div className='adFree'>
      <img className='instructionLogo' src={Ad} alt='job'/>
      <span className='JobText'>
      <span className='rupees'> Ad Free</span> &nbsp; learning experience
      </span>
      </div>
    </>
  )
}
