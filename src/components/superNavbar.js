import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";

export default function SuperNavbar() {
  return (
    <div class="bgRed supernavbar">
      <div class="leftSection"> 
        <span>Welcome!... Proof of Quality Is On Tenali Double Horse</span>
      </div>
      <div class="rightSection"> 
        <div className='links'>
            <FaPhoneAlt style={{marginRight:"1%"}} />
            <span>+911234567890</span>
        </div>
        <div className='links'>
            <MdEmail style={{marginRight:"1%"}} />
            <span>emnail@gmail.com</span>
        </div>
        <div className='links'>
            <RiLoginBoxFill style={{marginRight:"1%"}} />
            <span style={{width: 90}}>Corporate login</span>
        </div>
      </div>
    </div>
  )
}
