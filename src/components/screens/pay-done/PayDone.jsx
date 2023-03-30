import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdMoon } from 'react-icons/io'
import { GiCoffeeCup } from 'react-icons/gi'
import { HiBadgeCheck } from 'react-icons/hi'
import './styles.css'
import { CategoryStars } from '../../shared/category-stars/CategoryStars'

export const PayDone = () => {
  return (
    <main className='main_container'>
      <h2>Congratulation 🎉</h2>
      <div className='yourBooking-container'>

        <div className='hotelImg_container'>
          <img src="" alt="" />
        </div>

        <div className='inf-container' >

          <span className='destination_name'>
            {`Playa Guardalavaca, Holguin, Cuba`}
          </span>
          <h3 className='hotel_name'>
            {`Brisas Guardalavaca All Inclusive`}
          </h3>
          <CategoryStars category={`4`}/>
          <div className='cancel-info'>
            <HiBadgeCheck />
            &nbsp;
            Free Cancellation Option
          </div>
          <div className='all_inclusive'>
            <GiCoffeeCup />
            &nbsp;&nbsp;
            {`All Inclusive`}
          </div>

        </div>
      </div>

      <div className='bookingDetails-container'>
        <h3>Booking details</h3>
        <div className='bookingDetails'>
          <div>
            <span>Booking code:</span>
            <span>222-333-111</span>
          </div>
          <div>
            <span>Date:</span>
            <span>{`12 Aug, 2023`}</span>
          </div>
          <div>
            <span>Total:</span>
            <span>{`€  199`}</span>
          </div>
          <div>
            <span>Payment method:</span>
            <span>Credit card</span>
          </div>
        </div>
      </div>

      <div className='exploreMore-container'>
        <button>Explore more stays</button>
        <Link to='/'>My bookings</Link>
      </div>

      <div className='confirmation-mail'>
        <span>
          Within a few minutes, you will receive a confirmation email
          containing the details of your reservation, including
          check-in and check-out dates, the type of room you have
          chosen and the confirmation number.
        </span>
      </div>

    </main>

  )
}
