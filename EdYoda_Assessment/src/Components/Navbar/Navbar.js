import React from 'react'
import CompanyLogo from "../Asset/logo.png"
import { AiOutlineSearch } from 'react-icons/ai';
import "./StyleNav.css"


export default function Navbar() {
  return (
    <div className='navbar' >
        <div>
        <img src={CompanyLogo} className="logo" alt="..." ></img>
        </div>
      
        <div className='course'>
        <span >Courses &nbsp;</span>
        <b className='dropDown'> &#8964;</b>
        </div>
      <div className='Programs'>
        <span >Programs &nbsp;</span>
        <b className='dropDown'> &#8964;</b>
      </div>
      <div className='search'>
        <AiOutlineSearch/>
      </div>
      <div className='Login'>
        Login
      </div>
      <div className='join'>
        JOIN NOW
      </div>
    </div>
  )
}
 