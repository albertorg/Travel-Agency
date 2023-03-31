import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { GiCoffeeCup } from 'react-icons/gi'
import { HiBadgeCheck } from 'react-icons/hi'
import { CategoryStars } from '../../shared/category-stars/CategoryStars'
import { formatString } from '../../../helpers/formatString'
import { orderImages } from '../../../helpers/order-images'
import './styles.css'

export const PayDone = () => {

  const navigate = useNavigate()
  const { confirmation } = useSelector(state => state.booking)
  const hotel = JSON.parse(localStorage.getItem('hotel'))

  return (
    <main className='main_container main-Done'>
      <h2>Congratulation 🎉</h2>
      <div className='yourBooking-container'>
        <h3>Your booking</h3>

        <div className='yourBooking-main'>
          <div className='hotelImg_container'>
            <img 
              src={`http://photos.hotelbeds.com/giata/bigger/${orderImages(hotel)[0].path}`} 
              alt={hotel.name}
            />
          </div>

          <div className='inf-container' >

            <span className='destination_name'>
              {`${hotel.zoneName}, ${formatString(hotel.details.city.content)}, Cuba`}
            </span>
            <h3 className='hotel_name'>
              {hotel.name}
            </h3>
            <CategoryStars category={hotel.categoryName} />
            <div className='center-icons'>
              <HiBadgeCheck />
              &nbsp;
              Free Cancellation Option
            </div>
            <div className='center-icons'>
              <GiCoffeeCup />
              &nbsp;&nbsp;
              {formatString(confirmation.hotel.rooms[0].rates[0].boardName)}
            </div>

          </div>
        </div>
      </div>

      <div className='bookingDetails-container'>
        <h3>Booking details</h3>
        <div className='bookingDetails'>
          <div className='grid-details'>
            <span>Booking code:</span>
            <span>{confirmation.reference}</span>
          </div>
          <div className='grid-details'>
            <span>Date:</span>
            <span>{format(parseISO(confirmation.creationDate), 'd MMM, y')}</span>
          </div>
          <div className='grid-details'>
            <span>Total:</span>
            <span>{`€  ${confirmation.totalNet}`}</span>
          </div>
          <div className='grid-details'>
            <span>Payment method:</span>
            <span>Credit card</span>
          </div>
        </div>
      </div>

      <div className='confirmation-mail'>
        <span>
          Within a few minutes, <strong>you will receive a confirmation email </strong>
          containing the details of your reservation, including
          check-in and check-out dates, the type of room you have
          chosen and the confirmation number.
        </span>
      </div>

      <div className='exploreMore-container'>
        <button onClick={() => navigate('/')}>Explore more stays</button>
      </div>

    </main>

  )
}
