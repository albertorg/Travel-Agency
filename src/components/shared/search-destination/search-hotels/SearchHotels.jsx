import React, { useState } from 'react'
import './styles.css'
import { BiBed } from 'react-icons/bi'
import { ChoseInput } from '../shared/chose-input/ChoseInput'
import { FaHotel } from 'react-icons/fa'
import axios from 'axios'
import { xSignature } from '../../../../helpers/signature-generator'
import { useEffect } from 'react'
const CryptoJS = require("crypto-js");

export const SearchHotels = () => {

  const [data, setData] = useState()


    const other = () => {

      var signature = xSignature()

      var config = {
        method: 'get',
        url: '/hotel-api/1.0/status',
        headers: {
          'Api-key': '691de985c93cbcfa7683a83f1f7ed7ae',
          'X-Signature': signature,
  
        }
      
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        }) 
      
    }

  return (
    <form>
      <div className="autocomplete">

        <ChoseInput
          label='Find accommodation in'
          text='Where you want to go?'
          Icon={BiBed}
          IconList={FaHotel}
        />

        <button type="button" onClick={other}>prueba</button>

      </div>

      <div className="dates-container">

      </div>

    </form>
  )
}
