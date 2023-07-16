import React from 'react'
import bg from "../Asset/background.png"
import "./StyleBG.css"

export default function BackGroundImge() {
  return (
    <div>
      <img className='background' src={bg} alt='bg'/> 
    </div>
  )
}
