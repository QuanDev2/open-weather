import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { buildGetReq } from '../../utils/networkUtils/OpenWeatherApi';
import ApiService from '../../utils/networkUtils/ApiService';

function useFetchData() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const { search } = useLocation()
  const { city } = queryString.parse(search)

  async function fetchData(input) {
    setLoading(true)
    const getInstance = buildGetReq(input)
    const response = await ApiService.get(getInstance)
    setLoading(false)
    if (response.status === 404) {
      setError('City not found. Try another city.')
      setData(null)
    } else if (response.status === 400) {
      setError('Please enter a valid city name.')
      setData(null)
    } else if (response.status === 401) {
      setError(
        'Your stupid developer forgot to set API KEY env again. Call him now!'
      )
      setData(null)
    } else if (response.status === 200) {
      setData(response.data)
      setError('')
    }
  }
  
  useEffect(() => {
    fetchData(city)
    return () => {
      // cleanup
    }
  }, [city])

  return {loading, data, error}
}

export default useFetchData
