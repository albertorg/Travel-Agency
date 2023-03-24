import React from 'react'
import { useSelector } from 'react-redux'
import { Loading } from './loading/Loading'
import './styles.css'


export const Pay = () => {

  const { isLoading } = useSelector(state => state.hotels)

  return (
    <>
      {true && <Loading />}
      
    </>
  )
}
