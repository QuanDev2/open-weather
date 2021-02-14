import React from 'react'
import styled from '@emotion/styled';
import HiLowTemp from './HiLowTemp';

const Container = styled.div``
const TopContainer = styled.div`
  display: flex;
`
const FeelsLike = styled.div`

`
const MainTemp = styled.div`
  font-size: 4rem;
  margin-right: 0.8rem;
  margin-bottom: 0.5rem;
  transform: scaleY(1.2);
`

function Temperature({data}) {
  return (
    <Container>
      <TopContainer>
        <MainTemp>{parseInt(data.temp)}&#186;</MainTemp>
        <HiLowTemp hiTemp={data.temp_max} loTemp={data.temp_min} />
      </TopContainer>
      <FeelsLike>Feels like: {parseInt(data.feels_like)}&#186;</FeelsLike>
    </Container>
  )
}

export default Temperature
