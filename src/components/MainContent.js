import React from 'react'
import styled from '@emotion/styled'
import CityInfo from './city/CityInfo'
import WeatherCard from './weatherCard/WeatherCard'
import {useLocation} from 'react-router-dom'

const Container = styled.div`
  background: var(--primary);
  flex: 1;
  padding-bottom: 4rem;

  &::before {
    content: '';
    display: block;
    background: var(--accent-1);
    height: 1px;
  }
`

const WeatherForecast = styled.ul`
  max-width: 40%;
  margin: auto;
  padding-top: 2rem;
`

function MainContent() {
  const {state} = useLocation()
  const {data} = state
  console.log(data)
  const forecastList = data.list.map((item) => (
    <li key={item.dt}>
      <WeatherCard data={item} />
    </li>
  ))
  return (
    <Container>
      <CityInfo city={data.city} />
      <WeatherForecast>{forecastList}</WeatherForecast>
    </Container>
  )
}

export default MainContent
