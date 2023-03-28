import React from 'react'
import { BsFillKeyFill } from 'react-icons/bs'
import shield_stars from '../../../../assets/payment/shield_stars_vg.svg'
import { CategoryStars } from '../../../shared/category-stars/CategoryStars'
import { formatString } from '../../../../helpers/formatString'
import { differenceInCalendarDays, format, parseISO } from 'date-fns'
import './styles.css'

export const SideBar = ({ hotel, room }) => {

  const booking = JSON.parse(localStorage.getItem('booking'))

  const calculatetNights = () => {
    const numNight = differenceInCalendarDays(parseISO(booking.stay.checkOut), parseISO(booking.stay.checkIn))
    const gender = numNight === 1 ? 'night' : 'nights'

    return `${numNight} ${gender}`
  }

  const range = `${format(parseISO(booking.stay.checkIn), 'iii d MMM y')} - ${format(parseISO(booking.stay.checkOut), 'iii d MMM y')}`

  return (
    <aside >
      <div className='aside-hotel-info'>
        <div className='aside-title'>
          <h3>Your trip</h3>
        </div>

        <div className='info-trip-container'>
          <div className='data-hotel-container show-edge'>
            <div className='key-round'>
              <BsFillKeyFill />
            </div>

            <div>
              <div className='name-category'>
                <span>{hotel.name}</span>
                <CategoryStars category={hotel.categoryName} />
              </div>

              <div className='address-data'>
                {`${hotel.details.address.content}, ${hotel.zoneName}`}
              </div>
              <div className='check-date'>
                {range}
              </div>

              <div className='booking-data-container'>
                <div className='num-rooms'>1X</div>
                <div className='booking-data'>
                  <span>{`${calculatetNights()}, ${formatString(room.rates[0].boardName)}`}</span>
                  <span>{`${booking.occupancies[0].adults} Adults`}</span>
                </div>
              </div>
            </div>
          </div>

          <div className='free-cancel-container show-edge'>
            <div>
              <h4>Free cancellation</h4>
              <span>
                {`You can cancel the reservation of your
                your room until ${format(parseISO(booking.stay.checkIn), 'MMMM d, y')}.`}
              </span>
            </div>
            <div>
              <img src={shield_stars} alt="shield_stars" />
            </div>
          </div>

          <div className='total-price-container'>
            <span>Total price</span>
            <span>{`${room.rates[0].net} €`}</span>
          </div>

        </div>
      </div>
    </aside>
  )
}
