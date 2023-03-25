import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from './loading/Loading'
import './styles.css'
import { checkRate } from '../../../store/thunks/booking-thunks'


export const Pay = () => {

  const { isLoading } = useSelector(state => state.hotels)
  const booking = useSelector(state => state.booking)
  const dispatch = useDispatch()
  
  const rateKey = localStorage.getItem('rateKey')

  useEffect(() => {
    const check = JSON.stringify({
      rooms: [{
        rateKey,
      }]
    })

    dispatch(checkRate(check))
  }, [])
  

  return (
    <>
      {isLoading && <Loading />}

      <main>

      </main>
      
    </>
  )
}
