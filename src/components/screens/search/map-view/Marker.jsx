import React from 'react'
import {
    Popover,
    PopoverArrow,
    PopoverDisclosure,
    usePopoverState
} from "ariakit/popover"
import { InfoWindow } from './InfoWindow';
import './styles.css'
import { useState } from 'react';
import { useEffect } from 'react';


export const Marker = ({ text, animate, index }) => {

    const popover = usePopoverState({ gutter: -7, unstable_fixed: false })
    const [highlight, setHighlight] = useState('price_marker')

    useEffect(() => {
        if (popover.open) {
            setHighlight('price_marker highlight')
        }else {
            setHighlight('price_marker') 
        }
    }, [popover.open])


    return (

        <div className='price-tag'>

            <PopoverDisclosure
                state={popover}
                className={animate ? 'bounce price_marker' : highlight} 
            >
                {text}
            </PopoverDisclosure>

            <Popover state={popover} focusable={true} className="tooltip" >
                <PopoverArrow />
                <InfoWindow index={index} />
            </Popover>
        </div>

    )
}
