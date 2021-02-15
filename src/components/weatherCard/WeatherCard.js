import React from 'react'
import styled from '@emotion/styled'
import WeatherIcon from './WeatherIcon'
import Temperature from './Temperature';
import WeatherStats from './WeatherStats';

const Container = styled.div`
  /* background: gray; */
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--accent-3);
  color: var(--white);
  border-radius: 10px;

`


function WeatherCard({ data }) {
  const weather = data.weather[0]
  return (
    <Container className='color-secondary'>
        <WeatherIcon 
        time={data.dt}
        iconId={weather.icon} 
        description={weather.description} />
    <Temperature data={data.main}/>
    <WeatherStats 
      humidity={data.main.humidity} 
      precipitation={data.pop}
      windSpeed={data.wind.speed}
      windDegree={data.wind.deg}
      clouds={data.clouds.all}/>
    </Container>
  )
}

export default WeatherCard
