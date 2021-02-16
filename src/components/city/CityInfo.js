import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  background: var(--secondary);
  color: var(--primary);
  padding: 1rem;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 35%;
  margin: auto;
  align-items: center;
`

const CityName = styled.div`
  font-size: 2rem;
  display: inline-block;
  color: var(--primary);
`
const Sunset = styled.div`
  display: inline-block;
`

const Sunrise = styled.div`
  display: inline-block;
`

const SunriseIcon = styled.i`
  font-size: 1.25rem;
`
const SunsetIcon = styled.i`
font-size: 1.25rem;
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
      <FlexContainer>
        <Sunrise><SunriseIcon className="wi wi-sunrise"/> Sunrise: {sunriseTime}</Sunrise>
        <CityName>{city.name}</CityName>
        <Sunset>Sunset: {sunsetTime} <SunsetIcon className="wi wi-sunset"/></Sunset>
      </FlexContainer>
    </Container>
  )
}

export default CityInfo
