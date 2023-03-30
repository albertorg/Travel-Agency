import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GiCoffeeCup } from 'react-icons/gi'
import { HiBadgeCheck } from 'react-icons/hi'
import { CategoryStars } from '../../shared/category-stars/CategoryStars'
import './styles.css'

export const PayDone = () => {

  const navigate = useNavigate()

  return (
    <main className='main_container main-Done'>
      <h2>Congratulation 🎉</h2>
      <div className='yourBooking-container'>
        <h3>Your booking</h3>

        <div className='yourBooking-main'>
          <div className='hotelImg_container'>
            <img src="http://photos.hotelbeds.com/giata/bigger/00/004200/004200a_hb_ro_006.jpg" alt="hotel" />
          </div>

          <div className='inf-container' >

            <span className='destination_name'>
              {`Playa Guardalavaca, Holguin, Cuba`}
            </span>
            <h3 className='hotel_name'>
              {`Brisas Guardalavaca All Inclusive`}
            </h3>
            <CategoryStars category={`4`} />
            <div className='center-icons'>
              <HiBadgeCheck />
              &nbsp;
              Free Cancellation Option
            </div>
            <div className='center-icons'>
              <GiCoffeeCup />
              &nbsp;&nbsp;
              {`All Inclusive`}
            </div>

          </div>
        </div>
      </div>

      <div className='bookingDetails-container'>
        <h3>Booking details</h3>
        <div className='bookingDetails'>
          <div className='grid-details'>
            <span>Booking code:</span>
            <span>222-333-111</span>
          </div>
          <div className='grid-details'>
            <span>Date:</span>
            <span>{`12 Aug, 2023`}</span>
          </div>
          <div className='grid-details'>
            <span>Total:</span>
            <span>{`€  199`}</span>
          </div>
          <div className='grid-details'>
            <span>Payment method:</span>
            <span>Credit card</span>
          </div>
        </div>
      </div>

      <div className='confirmation-mail'>
        <span>
          Within a few minutes, you will receive a confirmation email
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
