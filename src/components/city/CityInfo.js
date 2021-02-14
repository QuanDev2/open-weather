import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  text-align: center;
`

const CityName = styled.div`
  font-size: 2rem;
  display: inline-block;
`
const Sunset = styled.div`
  display: inline-block;
`

const Sunrise = styled.div`
  display: inline-block;
`

function CityInfo({ city }) {
  const sunsetTime = new Date(city.sunset * 1000).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })
  const sunriseTime = new Date(city.sunrise * 1000).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })

  return (
    <Container>
      <CityName>{city.name}</CityName>
      <Sunrise>Sunrise: {sunriseTime}</Sunrise>
      <Sunset>Sunset: {sunsetTime}</Sunset>
    </Container>
  )
}

export default CityInfo
