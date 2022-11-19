import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ComboboxItem, ComboboxItemValue } from 'ariakit/combobox'
import { getFullList } from '../../../../../store/thunks/hotels-thunks'
import './styles.css'
import { setSelected } from '../../../../../store/slices/hotels_slice'
import { ImLocation } from 'react-icons/im'

export const ItemsList = ({ IconList, query, rangeRef}) => {

    const dispatch = useDispatch()
    const { fullList } = useSelector(state => state.hotels)


    useEffect(() => {
        dispatch(getFullList(query))

    }, [query, dispatch])


    const handleClickItem = (item) => {
        console.log('called')
        dispatch(setSelected(item))
        
        // try to change de focus to date-range
        
        // rangeRef.current.click()
        // rangeRef.current.focus()
    }

    const strConvert = (str) => {
        const splitStr = str.split(" ").map(word => {
            if (word === '') return ''         // check if string is empty ej: 'Varadero '
            return word[0] + word.slice(1).toLowerCase()
        })

        return splitStr.join(" ")
    }

    return (
        <>

            {
                query === ''
                    ? < ComboboxItem key={1} value='Search All' className='combobox-item'>
                        <div className='icon-list-conatiner'>
                            <IconList />
                        </div>

                        <div className="text-list-container">
                            <b>Search All</b>
                        </div>
                    </ComboboxItem  >
                    : fullList.map((item) => (
                        <ComboboxItem
                            key={item._id}
                            value={item.name.content}
                            className='combobox-item'
                            onClick={() => handleClickItem(item)}
                        >
                            <div className='icon-list-conatiner'>
                                {
                                    isNaN(item.code) ? <ImLocation /> : <IconList />
                                }
                            </div>

                            <div className="text-list-container">
                                <ComboboxItemValue />
                                <span className='regionText'>
                                    {
                                        typeof (item.code) === 'string'
                                            ? 'Cuba'
                                            : strConvert(item.city.content)
                                    }
                                </span>
                            </div>
                        </ComboboxItem>
                    ))
            }
        </>
    )
}


