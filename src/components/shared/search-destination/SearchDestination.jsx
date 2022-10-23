import React from 'react'
import { SearchHotels } from './search-hotels/SearchHotels'
import './styles.css'

export const SearchDestination = () => {
    return (
        <div className='search-destination-conatiner'>
            <nav className="navbar-search">
                <div className='btn-conatiner'>
                    <button>Flights</button>
                </div>
                <div className='btn-conatiner'>
                    <button>Hotels</button>
                </div>
            </nav>

            <div className="form-conatiner-styes">
                <SearchHotels />
            </div>
        </div>
    )
}
