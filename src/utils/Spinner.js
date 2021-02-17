import React from 'react'
import styled from '@emotion/styled'
import PuffLoader from 'react-spinners/PuffLoader'

const Container = styled.div`
  padding-top: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--accent-success);
`

const StyledSpinner = styled(PuffLoader)`
  font-size: 4rem;
  padding-bottom: 200px;
  font-weight: 700;
`

export default function Spinner() {
  return (
    <Container>
      <StyledSpinner size={100} color={`var(--accent-success)`}/>
    </Container>
  )
}
