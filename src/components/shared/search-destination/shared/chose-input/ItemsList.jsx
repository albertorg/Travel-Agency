import React from 'react'
import { ComboboxItem } from 'ariakit/combobox'
import './styles.css'
import { useAxios } from '../../../../../hooks/useAxios'
// import { ImLocation } from 'react-icons/im'

export const ItemsList = ({ IconList, query }) => {

    const params = {
        text: query ? query : 'jggkl'
    }

    console.log(query)

    const config = {
        url: 'http://localhost:4000/api/hotels/filter/',
        params,
        headers: { "Content-Type": "application/json" }
    }

    const { data } = useAxios(config)
    const hotels = data && data.hotels 

        

    console.log(hotels)

    return (
        <>

            {hotels === null || query === ''
                ? < ComboboxItem key={1} value='Search All' className='combobox-item' >
                    <div className='icon-list-conatiner'>
                        <IconList />
                    </div>

                    <div className="text-list-container">
                        Search All
                    </div>
                </ComboboxItem >
                : hotels.map((hotel) => (
                    <ComboboxItem key={hotel._id} value={hotel.name.content} className='combobox-item'>
                        <div className='icon-list-conatiner'>
                            <IconList />
                        </div>

                        <div className="text-list-container">
                            {hotel.name.content}
                        </div>
                    </ComboboxItem>
                ))
            }
        </>
    )
}


