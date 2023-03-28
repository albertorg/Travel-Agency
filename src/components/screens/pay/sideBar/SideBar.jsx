import React from 'react'
import { BsFillKeyFill } from 'react-icons/bs'
import { HiStar } from 'react-icons/hi'
import shield_stars from '../../../../assets/payment/shield_stars_vg.svg'
import './styles.css'

export const SideBar = () => {
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
              <div className='name-ctegory'>
                <span>Hotel Brisas Guardalavaca</span>
                <HiStar />
              </div>

              <div>Playa Guardalavaca Banes, Playa Guardalavaca</div>
              <div>mer 29 mar 2023gio 30 mar 2023</div>

              <div>
                <div>1X</div>
                <div>
                  <span>1 Notte, All inclusive</span>
                  <span>2 Adulti</span>
                </div>
              </div>
            </div>
          </div>

          <div className='free-cancel-container show-edge'>
            <div>
              <h4>Free cancellation</h4>
              <span>
                You can cancel the reservation of your
                your room until March 29, 2023.
              </span>
            </div>
            <div>
              <img src={shield_stars} alt="shield_stars" />
            </div>
          </div>

          <div className='total-price-container'>
            <span>Total price</span>
            <span>92,87 €</span>
          </div>

        </div>
      </div>
    </aside>
  )
}
