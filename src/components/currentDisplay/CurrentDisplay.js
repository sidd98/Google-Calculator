import React from 'react'
import './CurrentDisplay.css'

export default function CurrentDisplay(props) {
    return (
        <button className='input'>
                    {props.data === '' ? 0 : props.data}
        </button>
    )
}
