import React from 'react'
import styled from '@emotion/styled'


const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem;
`
const ErrorMsg = styled.h1`
  color: var(--accent-1);
  font-size: 4rem;
  padding-bottom: 200px;
`

function Error({msg}) {
  return (
    <Container>
    <ErrorMsg>
      {msg}
    </ErrorMsg>
    </Container>
  )
}

export default Error
