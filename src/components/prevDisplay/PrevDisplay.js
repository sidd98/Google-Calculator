import React from 'react'
import './PrevDisplay.css'
export default function PrevDisplay(props) {
    return (
        <button className='input'>
        {props.data}
        </button>
    )
}
