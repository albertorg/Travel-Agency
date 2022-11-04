import { useEffect, useState } from 'react';

import axios from 'axios'


export const useAxios = (config) => {

  const [state, setState] = useState({
    data: null,
    hasError: null
  })

  // console.log(config)

  const getAxios = async () => {

    const res = await axios(config)
    const data = await res.data

    console.log(data)

    setState({
      data,
      hasError: null
    })

  }

  // console.log(config.params.text)

  useEffect(() => {
    getAxios()
  }, [config.params.text])


  return {
    data: state.data,
    hasError: state.hasError
  }
}