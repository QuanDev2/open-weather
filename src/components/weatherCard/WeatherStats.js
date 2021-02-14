import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  flex-basis: 150px;
`
const Item = styled.div`
  margin-bottom: 0.3rem;
`

function getCardinalDirection(angle) {
  const directions = [
    '↑ N',
    '↗ NE',
    '→ E',
    '↘ SE',
    '↓ S',
    '↙ SW',
    '← W',
    '↖ NW'
  ]
  return directions[Math.round(angle / 45) % 8]
}

function WeatherStats({
  humidity,
  precipitation,
  windSpeed,
  windDegree,
  visibility,
  clouds
}) {
  const windDirection = getCardinalDirection(windDegree)
  return <Container>
    <Item>Precipitation: {precipitation}</Item>
    <Item>Humidity: {humidity}</Item>
    <Item>Wind: {windDirection} {parseInt(windSpeed)}mph</Item>
    <Item>Clouds: {clouds}</Item>
    <Item>Visibility: {visibility}</Item>
  </Container>
}

export default WeatherStats
