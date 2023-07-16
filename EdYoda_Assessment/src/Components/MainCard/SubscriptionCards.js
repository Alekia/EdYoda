import React, { useState } from 'react'
import "./StyleCard.css"
import { PiRadioButtonFill } from 'react-icons/pi';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default function SubscriptionCards() {
const [SelectTm, setSeletTm] = useState('cardTM')
const [SelectSm, setSeletSm] = useState('cardSM')
const [SelectThreem, setSeletThreem] = useState('cardThreeM')
const [radio, setRadio] = useState('iconsSuccess')
const [radioSm, setRadioSm] = useState('icons')
const [radioTM, setRadioTM] = useState('icons')

const [cost, setCost] = useState(179)
const handelTM=()=>{
setSeletTm('cardTM')
setSeletSm('cardSM')
setSeletThreem('cardThreeM')
setCost(179)
setRadio('iconsSuccess')
setRadioSm('icons')
setRadioTM('icons')
}
const handelSM = ()=>{
setSeletTm('cardTMNot')
setSeletSm('cardSMSucess')
setSeletThreem('cardThreeM')
setCost(149)
setRadio('icons')
setRadioSm('iconsSuccess')
setRadioTM('icons')
}
const handelThreeM=()=>{
setSeletTm('cardTMNot')
setSeletSm('cardSM')
setSeletThreem('cardThreeMSuccess')
setCost(99)
setRadio('icons')
setRadioSm('icons')
setRadioTM('iconsSuccess')

}
  return (
    <>
    <div className='cardfees'>
        <span className='icons'>
        <PiRadioButtonFill/>
        </span>
        <span className='Month'>12 Month subscription</span><br/>
        <span className='total'>
        <span className='Totaltittle'>Total</span> &nbsp; 
        <span className='amount'> &#8377; <b>99</b></span>
        <span className='Monthrs'> &#8377; 8</span> &nbsp; 
        <span className='mon'>/mo</span>
        </span>
    </div>
    <div className='status'>
            Offer expired
    </div>

    <div className={`${SelectTm}`} onClick={handelTM}>
        <span className={`${radio}`}>
        {radio === 'icons'?<PiRadioButtonFill/>:<BsFillCheckCircleFill/>}
        </span>
        <span className='Month'>12 Month subscription</span><br/>
        <span className='total'>
        <span className='Totaltittle'>Total</span> &nbsp; 
        <span className='amount'> &#8377; <b>179</b></span>
        <span className='Monthrs'> &#8377; 15</span> &nbsp; 
        <span className='mon'>/mo</span>
        </span>
    </div>
    <div className='statusSucess'>
            Recommended
    </div>

    <div className={`${SelectSm}`} onClick={handelSM}>
        <span className={`${radioSm}`}>
        {radioSm === 'icons'?<PiRadioButtonFill/>:<BsFillCheckCircleFill/>}
        </span>
        <span className='Month'>6 Month subscription</span><br/>
        <span className='total'>
        <span className='Totaltittle'>Total</span> &nbsp; 
        <span className='amount'> &#8377;<b>149</b></span>
        <span className='Monthrs'> &#8377; 25</span> &nbsp; 
        <span className='mon'>/mo</span>
        </span>
    </div>
    <div className='status'>
            Offer expired
    </div>

    <div className={`${SelectThreem}`} onClick={handelThreeM}>
        <span className={`${radioTM}`}>
        {radioTM === 'icons'?<PiRadioButtonFill/>:<BsFillCheckCircleFill/>}
        </span>
        <span className='Month'>3 Month subscription</span><br/>
        <span className='total'>
        <span className='Totaltittle'>Total</span> &nbsp; 
        <span className='amount'> &#8377; <b>99</b></span>
        <span className='Monthrs'> &#8377; 33</span> &nbsp; 
        <span className='mon'>/mo</span>
        </span>
    </div>
    <div className='status'>
            Offer expired
    </div>
    <div className='TotalAmount'> 
    <span><b>Total</b> (Incl. of 18% GST) </span>
    <span className='feesAmount'> <b>&#8377; {cost} </b></span>
   </div>
    </>
  )
}
