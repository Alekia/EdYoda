import React from 'react'
import './StyleCard.css'
import RanzorPay from '../Asset/RanzorPay.jpeg'
import SubscriptionCards from './SubscriptionCards'
import { TbClockExclamation } from 'react-icons/tb';
import Button from './Button';

export default function Index() {
  return (
    <div className='card'>
      <div className='signUp'>
        <div className='one'><b>1</b></div>
        <div className='signUPText'>sign Up</div>
      </div>

      <div className='subscribe'>
        <div className='one'><b>2</b></div>
        <div className='signUPText'>subscribe</div>
      </div>

    <div className='heading'>
      <strong>Select your subscription plan</strong>
    </div>
    <SubscriptionCards/>
    <div className='hr' >
      <hr/>
    </div>
   <div className='fees'> 
    <span>subscription Fee </span>
    <span className='feesAmount'> &#8377; 18,500 </span>
   </div>

   <div className='cardDM'>
        <span className='Limited'>Limited time Offer</span><br/>
      <span className='ClokLim'>
      <TbClockExclamation/>
      &nbsp; Offer Valid till 25th March 2023
      </span> 
        <span className='amount'> &#8377; <b>18,401</b></span>
  </div>
    
   <Button/>
   <div className='ranzorpay'>
    <img src={RanzorPay} alt='ranzorpay' height={60} width={150}/>
   </div>
    </div>
  )
}   
