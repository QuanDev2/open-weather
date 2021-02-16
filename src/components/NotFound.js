import React from 'react'
import styled from '@emotion/styled'
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10rem;
`
const Title = styled.h1`
  font-size: 4rem;
  color: var(--accent-error);
  padding-bottom: 200px;
`

function NotFound() {
  return (
    <Container>
      <Title>

      404! Page not found.
      </Title>
    </Container>
  )
}

export default NotFound
