import React from 'react'
import styled from '@emotion/styled';

const Container = styled.div`
  padding-top: 0.9rem;
`
const HiTemp = styled.div`
  margin-bottom: 0.7rem;
`

const LoTemp = styled.div``

function HiLowTemp({hiTemp, loTemp}) {
  return (
    <Container>
      <HiTemp>HI: {parseInt(hiTemp)}&#186;</HiTemp>
      <LoTemp>LO: {parseInt(loTemp)}&#186;</LoTemp>
    </Container>
  )
}

export default HiLowTemp
