import React from 'react'
// import { SearchFlights } from './search-flights/SearchFlights'
import { SearchHotels } from './search-hotels/SearchHotels'
import './styles.css'

export const SearchDestination = () => {

    return (
        <div className='search-destination-conatiner'>
            <div className="form-container-styes">
                <SearchHotels/>
            </div>
        </div>
    )
}



// ========== Use when flight api =============

// export const SearchDestination = () => {

//     const [activeChoise, setActiveChoise] = useState('hotel')

//     return (
//         <div className='search-destination-conatiner'>
//             <nav className="navbar-search">
//                 <div className={activeChoise === 'flight'
//                     ? 'btn-conatiner flights active'
//                     : 'btn-conatiner flights'}
//                 >
//                     <button
//                         onClick={() => setActiveChoise('flight')}
//                     >Flight</button>
//                 </div>
//                 <div className={activeChoise === 'hotel'
//                     ? 'btn-conatiner active hotels'
//                     : 'btn-conatiner hotels'}
//                 >
//                     <button
//                         onClick={() => setActiveChoise('hotel')}
//                     >Hotel</button>
//                 </div>
//             </nav>

//             <div className="form-container-styes">
//                 {activeChoise === 'hotel' ? <SearchHotels /> : <SearchFlights />}
//             </div>
//         </div>
//     )
// }