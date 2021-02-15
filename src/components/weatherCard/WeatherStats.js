import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  flex-basis: 200px;
`
const Item = styled.div`
  margin-bottom: 0.3rem;
`
const PrecipitationIcon = styled.i`
  font-size: 1.1rem;
  margin-right: 0.4rem;
`
const HumitidyIcon = styled.i`
  margin-right: 0.7rem;
  padding-left: 0.2rem;
`
const WindIcon = styled.i`
  font-size: 1.1rem;
  margin-right: .3rem;
`
const CloudsIcon = styled.i`
  font-size: 1.1rem;
  margin-right: 0.5rem;
`

function getCardinalDirection(angle) {
  const directions = [
    'N',
    'NE',
    'E',
    'SE',
    'S',
    'SW',
    'W',
    'NW'
  ]
  return directions[Math.round(angle / 45) % 8]
}

function WeatherStats({
  humidity,
  precipitation,
  windSpeed,
  windDegree,
  clouds
}) {

  const windDirection = getCardinalDirection(windDegree)
  return (
    <Container>
      <Item>
        <PrecipitationIcon className='wi wi-umbrella stat-icon' />
        Precipitation: {parseInt(precipitation * 100)}%
      </Item>
      <Item>
        <HumitidyIcon className='wi wi-humidity stat-icon' />
        Humidity: {humidity}%
      </Item>
      <Item>
        <WindIcon className='wi wi-strong-wind' />
        Wind: {windDirection} {parseInt(windSpeed)} mph
      </Item>
      <Item>
        <CloudsIcon className='wi wi-cloud'/>
        Clouds: {clouds}%
        </Item>
    </Container>
  )
}

export default WeatherStats
