import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
// import { AiFillCloseCircle } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import './toast.css'

export const Toast = ({ active, setActive }) => {

    const handleClick = () => {
        setActive(false)
    }

    return (
        <div className={active ? 'toast activeBar' : 'toast'}>
            <div className='toast_content'>
                <span className='check_icon'><AiFillCheckCircle /></span>

                <div className='message'>
                    <span className='text text_1'>Success</span>
                    <span className='text text_2'>Your message has been sent</span>
                </div>
            </div>

            <span className='close_icon' onClick={handleClick}>
                <GrFormClose />
            </span>

            <div className={active ? 'progress activeBar' : 'progress'}></div>

        </div>
    )
}
