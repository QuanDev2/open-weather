import React from 'react'
import styled from '@emotion/styled'
import DateTime from './DateTime';

const Container = styled.div``

const Icon = styled.img`
  width: 150px;
  height: 90px;
  object-fit: cover;
`

const Description = styled.div`
  font-size: 1.5rem;
  margin-left: 0.6rem;
`

function WeatherIcon({ iconId, description, time }) {
  const iconUrl = `https://openweathermap.org/img/wn/${iconId}@4x.png`
  return (
    <Container>
      <DateTime epochTime={time}/>
      <Icon src={iconUrl} alt={description} />
      <Description>{description}</Description>
    </Container>
  )
}

export default WeatherIcon
