import React from 'react'
import styled from '@emotion/styled'
import WeatherCard from './weatherCard/WeatherCard';

const Container = styled.ul`
  max-width: 45%;
  margin: auto;
  padding-top: 2rem;
`

function ForecastList({ list }) {
  if (!list) return null
  return (
    <Container>
      { list.map((item) => (
        <li key={item.dt}>
          <WeatherCard data={item} />
        </li>
      ))}
    </Container>
  )
}

export default ForecastList
