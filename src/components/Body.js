import React from 'react'
import styled from '@emotion/styled'
import CityInfo from './city/CityInfo'
import WeatherCard from './weatherCard/WeatherCard'

const BodyContainer = styled.div``

const WeatherForecast = styled.ul`
  max-width: 40%;
  margin: auto;
`

function Body({ data }) {
  const forecastList = data.list.map((item) => (
    <li key={item.dt}>
      <WeatherCard data={item} />
    </li>
  ))
  return (
    <BodyContainer>
      <CityInfo city={data.city} />
      <WeatherForecast>{forecastList}</WeatherForecast>
    </BodyContainer>
  )
}

export default Body
