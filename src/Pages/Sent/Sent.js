import React from 'react';

// stylesheet
import './Sent.css';

// NavLink
import { Link } from "react-router-dom";

// react icons
import { AiOutlineCheck } from "react-icons/ai";
import { FaRegClone } from "react-icons/fa";

const Sent = () => {
  return (
    <div className='sent'>
        {/* */}
        <div className="copy_link">
            <FaRegClone className='copy_icon'/>
            <p>cupidnote.com/christofa25/message</p>
        </div>
        <div className="message">
            <AiOutlineCheck className='sent_icon'/>
            <h1>Message Sent</h1>
        </div>
        <Link to='/home' className='edit'>Edit Message</Link>
    </div>
  )
}

export default Sent