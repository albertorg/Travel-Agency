import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ComboboxItem, ComboboxItemValue } from 'ariakit/combobox'
import { getFullList } from '../../../../../store/thunks/hotels-thunks'
import { ImLocation } from 'react-icons/im'
import { formatString } from '../../../../../helpers/formatString'
import './styles.css'

export const ItemsList = ({ IconList, query, handleClick }) => {

    const dispatch = useDispatch()
    const { fullList } = useSelector(state => state.hotels)


    useEffect(() => {
        dispatch(getFullList(query))

    }, [query, dispatch])


    return (
        <>
            
            {
                fullList.map((item) => (
                    <ComboboxItem
                        key={item._id}
                        value={item.name.content}
                        className='combobox-item'
                        onClick={() => handleClick(item)}
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
                                        : formatString(item.city.content)
                                }
                            </span>
                        </div>
                    </ComboboxItem>
                ))
            }
        </>
    )
}


