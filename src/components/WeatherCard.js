import React from 'react'
import styled from '@emotion/styled'

const WeatherContainer = styled.div`
  background: gray;
  margin-bottom: 0.5rem;
`

function WeatherCard({data}) {
  return (
    <WeatherContainer>
      {data.main.temp}
    </WeatherContainer>
  )
}

export default WeatherCard
