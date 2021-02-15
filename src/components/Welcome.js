import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-size: 4rem;
  color: var(--accent-4);
  padding-bottom: 200px;
  
`

function Welcome() {
  return (
    <Container>
      <Title>Search for a city for weather forecast</Title>
    </Container>
  )
}

export default Welcome
