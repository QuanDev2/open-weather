import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import CityInfo from './city/CityInfo'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { buildGetReq } from '../utils/networkUtils/OpenWeatherApi'
import ApiService from '../utils/networkUtils/ApiService'
import Spinner from '../utils/Spinner'
import ForecastList from './ForecastList'
import Error from './Error';

const Container = styled.div`
  background: var(--background-body);
  flex: 1;
  padding-bottom: 4rem;

  &::before {
    content: '';
    display: block;
    background: var(--accent-error);
    height: 1px;
  }
`
function MainContent() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const { search } = useLocation()
  const { city } = queryString.parse(search)

  async function fetchData(input) {
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
      setError('Your stupid developer forgot to set API KEY env again. Call him now!')
      setData(null)
    }
    else if (response.status === 200) {
      setData(response.data)
      setError('')
    }

  }

  useEffect(() => {
    fetchData(city)
    return () => {
      // cleanup
    }
  }, [])

  if (loading) return <Spinner />
  else if (error) return <Error msg={error} />
  else return (
    <>
      <CityInfo city={data.city} />
      <ForecastList list={data.list} />
    </>
  )

}

export default MainContent
