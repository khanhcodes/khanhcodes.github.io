import React from 'react'
import './mobile.css'

function Mobile({ isOpen,setIsOpen }) {
  return (
    <div className='mobile'>
        <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-br-cross"></i>
        </div>
        <div className='mobile-options'>
            <div className='mobile-option'>
                <a href="#project">
                    Projects
                </a>
            </div>
            <div className='mobile-option'>
                <a href="#skill">
                    Skills
                </a>
            </div>
            <div className='mobile-option'>
                <a href="#experience">
                    Experience
                </a>
            </div>
            <div className='mobile-option'>
                <a href="#contact">
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Mobile